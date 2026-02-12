/**
 * Debug dump a variable to the console
 * @param value
 */
export function dd(value: unknown): void {
	console.debug(JSON.stringify(value, undefined, 2));
}
