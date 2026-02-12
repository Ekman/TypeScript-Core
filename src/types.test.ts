import {
	nullToUndefined,
	strCompare,
	throwIfUndefined,
	TypingError,
} from "./types";

describe("types", () => {
	it("should be able to convert a null value to undefined", () => {
		const data = [
			["foo", "foo"],
			[undefined, undefined],
			[null, undefined],
		];

		for (const [input, expected] of data) {
			expect(nullToUndefined(input)).toEqual(expected);
		}
	});

	it("should be able to compare a string", () => {
		const data = [
			["a", "b", -1],
			["b", "a", 1],
			["z", "z", 0],
		];

		for (const [a, b, expected] of data) {
			expect(strCompare(a as string, b as string)).toEqual(expected);
		}
	});

	it("should be able to throw if a value is null or undefined", () => {
		expect(() => throwIfUndefined(undefined)).toThrow(TypingError);
		expect(() => throwIfUndefined(undefined)).toThrow(TypingError);
		expect(() => throwIfUndefined("")).not.toThrow(TypingError);
		expect(() => throwIfUndefined({})).not.toThrow(TypingError);
	});
});
