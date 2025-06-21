/**
 * No-operation type.
 */
export type Noop = () => void;

/**
 * No-operation function.
 */
export const noop: Noop = () => {};

/**
 * Normalize a possible null value to undefined.
 * @param value
 */
export function nullToUndefined<T>(value: T | undefined | null): T | undefined {
  return value === null ? undefined : value;
}

/**
 * Compare two strings using a classic compare predicate.
 * @param a
 * @param b
 */
export function strCompare(a: string, b: string): number {
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
}
