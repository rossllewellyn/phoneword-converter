import { convertPhonewordToWord } from "./converter.helper";

const mockWords = ["game", "gand", "gane", "hame", "hand", "iand", "icod"];

describe("Phoneword to Word Converter Tests", () => {
  test("Convert phoneword to words", () => {
    expect(convertPhonewordToWord("4263")).toEqual(mockWords);
  });
  test("Handle Invalid Input", () => {
    expect(() => {
      convertPhonewordToWord("hello");
    }).toThrow("Invalid Input");
    expect(() => {
      convertPhonewordToWord("234abc");
    }).toThrow("Invalid Input");
    expect(() => {
      convertPhonewordToWord("123");
    }).toThrow("Invalid Input");
  });
});
