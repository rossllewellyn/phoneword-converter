import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface PhonewordState {
  value: string;
}

const initialState: PhonewordState = {
  value: "",
};

export const phonewordSlice = createSlice({
  name: "phoneword",
  initialState,

  reducers: {
    inputDigit: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    clearInput: (state) => {
      state.value = "";
    },
  },
});

export const { inputDigit, clearInput } = phonewordSlice.actions;

export const selectPhoneword = (state: RootState) => state.phoneword.value;

export default phonewordSlice.reducer;
