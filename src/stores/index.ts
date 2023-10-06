import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import themeReducer from "stores/reducers/theme";
import weeklyReducer from "stores/reducers/weekly";
import stepReducer from "stores/reducers/step";
import dailyReducer from "stores/reducers/daily";
import weeklyStartReducer from "stores/reducers/start";

const rootReducer = combineReducers({
  theme: themeReducer,
  weekly: weeklyReducer,
  step: stepReducer,
  daily: dailyReducer,
  start: weeklyStartReducer,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
