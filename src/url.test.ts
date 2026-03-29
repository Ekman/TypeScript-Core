import { describe, it, expect } from "vitest";
import { urlSetOrigin } from "./url";

describe("urlEnsureAbsolute", () => {
	it.each([
		// already absolute — returned as-is
		["https://example.com", "https://example.com/foo", "https://example.com/foo"],
		["https://example.com", "https://example.com/", "https://example.com/"],
		["https://example.com", "https://example.com", "https://example.com"],

		// relative path — joined with origin
		["https://example.com", "foo", "https://example.com/foo"],
		["https://example.com", "/foo", "https://example.com/foo"],
		["https://example.com", "foo/bar", "https://example.com/foo/bar"],
		["https://example.com", "/foo/bar", "https://example.com/foo/bar"],

		// Does not contain origin
		["https://example.com", "https://foo.com/foo/bar", "https://example.com/foo/bar"],
	])("(%s, %s) => %s", (origin, url, expected) => {
		expect(urlSetOrigin(origin, url)).toBe(expected);
	});
});
