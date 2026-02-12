import {
	strCapitalize,
	strToBool,
	strTrim,
	strTrimEnd,
	strTrimStart,
} from "./string";

describe("string", () => {
	it("should be able to trim end", () => {
		const data = [
			["fooo ", " ", "fooo"],
			["foo/", "/", "foo"],
			["foo", " ", "foo"],
			["", " ", ""],
			[undefined, undefined],
		];

		for (const [value, trim, expected] of data) {
			// @ts-expect-error Typing magic
			expect(strTrimEnd(value, trim)).toEqual(expected);
		}
	});

	it("should be able to trim start", () => {
		const data = [
			[" fooo ", " ", "fooo "],
			["/foo", "/", "foo"],
			["foo", " ", "foo"],
			["", " ", ""],
			[undefined, undefined],
		];

		for (const [value, trim, expected] of data) {
			// @ts-expect-error Typing magic
			expect(strTrimStart(value, trim)).toEqual(expected);
		}
	});

	it("should be able to trim", () => {
		const data = [
			[" fooo ", " ", "fooo"],
			["/foo", "/", "foo"],
			["foo", " ", "foo"],
			["", " ", ""],
			[undefined, undefined],
		];

		for (const [value, trim, expected] of data) {
			// @ts-expect-error Typing magic
			expect(strTrim(value, trim)).toEqual(expected);
		}
	});

	it("should be able to capitalize a string", () => {
		const data = [
			["foo", "Foo"],
			["Foo", "Foo"],
			["", ""],
			["bArA", "BArA"],
			[undefined, undefined],
		];

		for (const [a, expected] of data) {
			expect(strCapitalize(a as string)).toEqual(expected);
		}
	});

	it("should be able to convert a string to bool", () => {
		const data = [
			["1", true],
			["0", false],
			["true", true],
			["false", false],
			[undefined, false],
			[null, false],
		];

		for (const [input, expected] of data) {
			// @ts-expect-error Typing magic
			expect(strToBool(input)).toEqual(expected);
		}
	});
});
