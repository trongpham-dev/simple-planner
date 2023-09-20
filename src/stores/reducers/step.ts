import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "stores";

export interface StepState {
  step: number;
  current: number;
}

const initialState: StepState = {
  step: 1,
  current: 0,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep(state) {
      state.step += 1;
      if (state.current < 4) {
        state.current += 1;
      }
    },
    prevStep(state) {
      state.step -= 1;
    },
  },
});

export const { nextStep, prevStep } = stepSlice.actions;

export default stepSlice.reducer;

export const selectStep = () => (state: AppState) => state.step;
