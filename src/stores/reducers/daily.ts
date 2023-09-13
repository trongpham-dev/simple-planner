import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyType } from "models/enum";
import { AppState } from "stores";

export interface DailyState {
  dailyLayout: DailyType;
}

const initialState: DailyState = {
  dailyLayout: DailyType.Minimal,
};

export const dailySlice = createSlice({
  name: "daily",
  initialState,
  reducers: {
    changeDailyLayout(state, action: PayloadAction<DailyType>) {
      state.dailyLayout = action.payload;
    },
  },
});

export const { changeDailyLayout } = dailySlice.actions;
export default dailySlice.reducer;
export const selectDaily = () => (state: AppState) => state.daily;
