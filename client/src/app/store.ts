import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import phonewordReducer from "../features/phone/phonewordSlice";

export const store = configureStore({
  reducer: {
    phoneword: phonewordReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
