import { describe, expect, test } from "vitest";
import { enumParse } from "./enum.js";

enum Color {
    Red = "Red",
    Blue = "Blue",
}

describe("toEnum", () => {
    test.each([
        ["Red", Color.Red],
        ["Blue", Color.Blue],
    ])("parses '%s' to enum value", (input, expected) => {
        expect(enumParse(Color, input)).toBe(expected);
    });

    test.each([
        ["Green"],
        [""],
        ["red"],
    ])("throws on invalid value '%s'", (input) => {
        expect(() => enumParse(Color, input)).toThrow();
    });
});
