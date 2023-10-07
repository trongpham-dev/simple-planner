import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorType, Orientation } from "models/enum";

import { AppState } from "stores";

export type ThemeState = {
  color: string;
  orientation?: Orientation;
};

const initialState: ThemeState = {
  color: "",
  orientation: undefined,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColor(state, action: PayloadAction<ColorType>) {
      state.color = action.payload;
    },

    changeOrientation(state, action: PayloadAction<Orientation>) {
      state.orientation = action.payload;
    },

    resetOrientation(state, action: PayloadAction<Orientation>) {
      state.orientation = undefined;
    },
  },
});

export const { changeColor, changeOrientation, resetOrientation } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = () => (state: AppState) => state.theme;
