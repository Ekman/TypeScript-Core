import {notEmpty} from "empty-php";

export function objectRemoveEmpty(obj: object, recursive = true): object {
	return Object.fromEntries(
		Object.entries(obj)
			.map(([ key, value ]) => {
				if (recursive) {
					if (Array.isArray(value)) {
						return [
							key,
							value.map(item =>
								typeof item === "object"
									? objectRemoveEmpty(item)
									: item,
							),
						];
					} else if (typeof value === "object") {
						return [ key, objectRemoveEmpty(value) ];
					}
				}

				return [ key, value ];
			})
			.filter(([ , value ]) => notEmpty(value))
	);
}
