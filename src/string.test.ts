import { strTrim, strTrimEnd, strTrimStart } from "./string";

describe("string", () => {
  it("should be able to trim end", () => {
    const data = [
      ["fooo ", " ", "fooo"],
      ["foo/", "/", "foo"],
      ["foo", " ", "foo"],
    ];

    for (const [value, trim, expected] of data) {
      expect(strTrimEnd(value, trim)).toEqual(expected);
    }
  });

  it("should be able to trim start", () => {
    const data = [
      [" fooo ", " ", "fooo "],
      ["/foo", "/", "foo"],
      ["foo", " ", "foo"],
    ];

    for (const [value, trim, expected] of data) {
      expect(strTrimStart(value, trim)).toEqual(expected);
    }
  });

  it("should be able to trim", () => {
    const data = [
      [" fooo ", " ", "fooo"],
      ["/foo", "/", "foo"],
      ["foo", " ", "foo"],
    ];

    for (const [value, trim, expected] of data) {
      expect(strTrim(value, trim)).toEqual(expected);
    }
  });
});
