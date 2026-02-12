import { errorDetect } from "./errors-utils";

describe("error-utils", () => {
	test.each([
		[{ message: "foo" }, true],
		[new Error("foo"), true],
		["x", false],
	])("can detect errors", (input, expected) => {
		expect(errorDetect(input)).toBe(expected);
	});
});
