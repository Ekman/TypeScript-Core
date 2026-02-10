#!/usr/bin/env node

import {MongoClient, MongoServerError} from "mongodb";
import { readFile } from "node:fs/promises";

const indicesPath = process.argv[2];
const uri = process.argv[3] ??
	"mongodb://localhost:27017/admin?directConnection=true";

function serializeIndex({ key, unique }) {
	return JSON.stringify({ key, unique: Boolean(unique) });
}

function createDesiredSpec(definitions) {
	const desiredSpecs = definitions.map((def) => ({
		key: def.index,
		unique: Boolean(def.options?.unique),
		options: def.options || {},
	}));

	return new Set(desiredSpecs.map(serializeIndex));
}

async function deleteIndices(collection, desiredSpec) {
	const currentIndices = await collection.listIndexes().toArray();

	await Promise.all(
		currentIndices
			.filter(idx => idx.name !== "_id_")
			.map(async idx => {
				const serialized = serializeIndex({
					key: idx.key,
					unique: Boolean(idx.unique),
				});

				if (!desiredSpec.has(serialized)) {
					await collection.dropIndex(idx.name);

					console.log("Index dropped.", {
						collectionName: collection.collectionName,
						index: idx.name,
						key: idx.key,
					});
				}
			}),
	);
}

function createIndices(collection, definitions) {
	return Promise.all(
		definitions
			.map(async definition => {
				const index = definition.index;
				const options = definition.options || {};

				await collection.createIndex(index, options);

				console.log("Index created.", {
					collectionName: collection.collectionName,
					index,
					options,
				});
			}),
	);
}

function createSearchIndices(collection, definitions) {
	return Promise.all(
		Object.entries(definitions)
			.map(async  ([ name, definition ]) => {
				try {
					await collection.updateSearchIndex(name, definition);
				} catch (error) {
					if (
						error instanceof MongoServerError && error.codeName === "IndexNotFound"
					) {
						await collection.createSearchIndex({ name, definition });
					} else {
						throw error;
					}
				}

				console.log("Search index created.", {
					collectionName: collection.collectionName,
					name,
				});
			}),
	);
}

(async () => {
	if (!indicesPath) {
		console.error("Usage: mongodb-create-indices <indices-path> [uri]");
		process.exit(1);
	}
	
	const indices = JSON.parse(
		await readFile(indicesPath, "utf-8"),
	);

	console.log("Lets create some indices.", { uri });

	const client = new MongoClient(uri);

	await client.connect();

	try {
		const db = client.db();

		const collections = new Set(
			await db
				.listCollections(undefined, { nameOnly: true })
				.map(x => x.name)
				.toArray()
		);

		for (const [collectionName, definitions] of Object.entries(indices)) {
			if (!collections.has(collectionName)) {
				console.log("Creating collection.", { collectionName });
				await db.createCollection(collectionName);
			}

			const collection = db.collection(collectionName);
			console.log("Switching collection.", { collectionName });

			const desiredSpec = createDesiredSpec(definitions.indices);

			await deleteIndices(collection, desiredSpec);
			await createIndices(collection, definitions.indices);

			if (definitions.searchIndices && definitions.searchIndices.length > 0) {
				await createSearchIndices(collection, definitions.searchIndices);
			}
		}

		console.log("Done");
	} finally {
		await client.close();
	}
})();
