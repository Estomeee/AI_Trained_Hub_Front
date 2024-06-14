import { combineReducers } from "@reduxjs/toolkit";
import { fileApi } from "./fileApi.ts";
import { modelApi } from "./modelApi.ts";

export const rootReducer = combineReducers({
  [fileApi.reducerPath]: fileApi.reducer,
  [modelApi.reducerPath]: modelApi.reducer,
});
