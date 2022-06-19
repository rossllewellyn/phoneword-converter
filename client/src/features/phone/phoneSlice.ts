import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface PhoneState {
  phoneword: string;
  convertedWords: string;
}

const initialState: PhoneState = {
  phoneword: "",
  convertedWords: "Phoneword Converter",
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,

  reducers: {
    // Concat Digit With State
    inputDigit: (state, action: PayloadAction<string>) => {
      state.phoneword += action.payload;
    },
    // Clear The State
    clearInput: (state) => {
      state.phoneword = "";
    },
    updateConvertedWords: (state, action: PayloadAction<string>) => {
      state.convertedWords = action.payload;
    },
  },
});

export const { inputDigit, clearInput, updateConvertedWords } =
  phoneSlice.actions;

export const selectPhoneword = (state: RootState) => state.phone.phoneword;
export const selectConvertedWords = (state: RootState) =>
  state.phone.convertedWords;

export default phoneSlice.reducer;
