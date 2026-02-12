import { objectRemoveEmpty } from "./object";

describe("object", () => {
	it("filter out non-empty keys", () => {
		const data = {
			foo: undefined,
			bar: "",
			hello: "world",
			x: {
				a: 1,
				b: 0,
			},
		};

		expect(objectRemoveEmpty(data)).toEqual({
			hello: "world",
			x: { a: 1 },
		});
	});
});
