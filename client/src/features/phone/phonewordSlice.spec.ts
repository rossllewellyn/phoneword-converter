import phonewordReducer, {
  PhonewordState,
  inputDigit,
  clearInput,
} from "./phonewordSlice";

describe("phoneword reducer", () => {
  const initialState: PhonewordState = {
    value: "8354",
  };
  test("should handle initial state", () => {
    expect(phonewordReducer(undefined, { type: "unknown" })).toEqual({
      value: "",
    });
  });
  test("should handle digit input", () => {
    const actual = phonewordReducer(initialState, inputDigit("6"));
    expect(actual.value).toEqual("83546");
  });
  test("should handle clearing input", () => {
    const actual = phonewordReducer(initialState, clearInput());
    expect(actual.value).toEqual("");
  });
});
