export function arrayContains<T>(
	array: ReadonlyArray<T>,
	contains: (value: T) => boolean,
): boolean {
	return Boolean(array.find(contains));
}

export function arrayRemoveBy<T extends object, TKey extends keyof T>(
	array: ReadonlyArray<T>,
	key: TKey,
	value: T[TKey],
): T[] {
	return array.filter((x) => x[key] !== value);
}
