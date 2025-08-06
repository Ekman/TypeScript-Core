export function arrayContains<T>(
  array: ReadonlyArray<T>,
  contains: (value: T) => boolean,
): boolean {
  return Boolean(array.find(contains));
}
