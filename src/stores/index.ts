import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import themeReducer from "stores/reducers/theme";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
