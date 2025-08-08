import { CoreError } from "./errors";

export type NullOrUndefined = undefined | null;

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
export function nullToUndefined<T>(value: T): T;
export function nullToUndefined<T>(value: NullOrUndefined): undefined;
export function nullToUndefined<T>(value: T | NullOrUndefined): T | undefined {
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

export class TypingError extends CoreError {}

/**
 * If a value is undefined or null, throw.
 * @param value
 */
export function throwIfUndefined<T>(
  value: T | NullOrUndefined,
): asserts value is T {
  if (typeof value === "undefined" || value === null) {
    throw new TypingError("Value is not allowed to be undefined or null.");
  }
}
