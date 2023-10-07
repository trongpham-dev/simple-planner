import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeeklyStartType } from "models/enum";
import { AppState } from "stores";

export interface WeeklyStartState {
  startAt: WeeklyStartType | undefined;
}

const initialState: WeeklyStartState = {
  startAt: undefined,
};

export const weeklyStartSlice = createSlice({
  name: "weeklyStart",
  initialState,
  reducers: {
    changeWeeklyStart(state, action: PayloadAction<WeeklyStartType>) {
      state.startAt = action.payload;
    },
  },
});

export const { changeWeeklyStart } = weeklyStartSlice.actions;
export default weeklyStartSlice.reducer;
export const selectWeeklyStart = () => (state: AppState) => state.start;
