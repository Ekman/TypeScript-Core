import { strTrimStart } from "./string";

/**
 * Set and ensure a certain path always has a specified origin.
 */
export function urlSetOrigin(origin: string, urlOrPath: string): string {
	if (urlOrPath.startsWith(origin)) return urlOrPath;

	const url = new URL(urlOrPath, origin);
	const path = strTrimStart(url.pathname, "/");

	return `${origin}/${path}`;
}
