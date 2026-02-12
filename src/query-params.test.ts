import { queryParamsCreate } from "./query-params";

describe("query params", () => {
	it("should be able to create query parameters", () => {
		const queryParams = {
			"foo bar": "bar",
			hello: "hello world",
			x: undefined,
			y: null,
		};

		expect(queryParamsCreate(queryParams)).toEqual(
			"foo%20bar=bar&hello=hello%20world",
		);
	});
});
