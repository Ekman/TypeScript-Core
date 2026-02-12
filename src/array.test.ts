import { arrayContains, arrayRemoveBy } from "./array";

describe("string", () => {
	it("should be able to determine if an array contains an item", () => {
		const data = [
			[[1, 2, 3], (x: number) => x === 2, true],
			[[1, 4, 3], (x: number) => x === 2, false],
		];

		for (const [array, contains, expected] of data) {
			// @ts-expect-error It's OK
			expect(arrayContains(array, contains)).toEqual(expected);
		}
	});

	it("should be able to remove", () => {
		const data = [[[{ x: "foo" }, { x: "bar" }], "x", "foo", [{ x: "bar" }]]];

		for (const [array, key, value, expected] of data) {
			expect(arrayRemoveBy(array, key, value)).toEqual(expected);
		}
	});
});
