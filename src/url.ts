import { strTrimStart } from "./string";

/**
 * Set and ensure a certain path always has a specified origin.
 */
export function urlSetOrigin(origin: string, path: string): string {
	if (path.startsWith(origin)) return path;

	const url = new URL(path, origin);
	path = strTrimStart(url.pathname, "/");

	return `${origin}/${path}`;
}
