import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeekLyStartType } from "models/enum";
import { AppState } from "stores";

export interface WeeklyStartState {
  startAt: WeekLyStartType | undefined;
}

const initialState: WeeklyStartState = {
  startAt: undefined,
};

export const weeklyStartSlice = createSlice({
  name: "weeklyStart",
  initialState,
  reducers: {
    changeWeeklyStart(state, action: PayloadAction<WeekLyStartType>) {
      state.startAt = action.payload;
    },
  },
});

export const { changeWeeklyStart } = weeklyStartSlice.actions;
export default weeklyStartSlice.reducer;
export const selectWeeklyStart = () => (state: AppState) => state.start;
