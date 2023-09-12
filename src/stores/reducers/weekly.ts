import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeeklyType } from "models/enum";
import { AppState } from "stores";

export interface WeeklyState {
  weeklyLayout: string;
}

const initialState: WeeklyState = {
  weeklyLayout: WeeklyType.Boxed,
};

export const weeklySlice = createSlice({
  name: "weekly",
  initialState,
  reducers: {
    changeWeeklyLayout(state, action: PayloadAction<string>) {
      state.weeklyLayout = action.payload;
    },
  },
});

export const { changeWeeklyLayout } = weeklySlice.actions;
export default weeklySlice.reducer;
export const selectWeekly = () => (state: AppState) => state.weekly;
