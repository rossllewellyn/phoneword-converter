import phoneReducer, {
  PhoneState,
  inputDigit,
  clearInput,
  updateConvertedWords,
} from "./phoneSlice";

describe("phoneword reducer", () => {
  const initialState: PhoneState = {
    phoneword: "8354",
    convertedWords: "",
  };
  test("should handle initial state", () => {
    expect(phoneReducer(undefined, { type: "unknown" })).toEqual({
      phoneword: "",
      convertedWords: "Phoneword Converter",
    });
  });
  test("should handle digit input", () => {
    const actual = phoneReducer(initialState, inputDigit("6"));
    expect(actual.phoneword).toEqual("83546");
  });
  test("should handle clearing input", () => {
    const actual = phoneReducer(initialState, clearInput());
    expect(actual.phoneword).toEqual("");
  });
  test("should handle updating convertedWords", () => {
    const actual = phoneReducer(
      initialState,
      updateConvertedWords("lorem ipsum dolor sit amet")
    );
    expect(actual.convertedWords).toEqual("lorem ipsum dolor sit amet");
  });
});
