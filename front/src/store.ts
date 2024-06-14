import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./api/reducers";
import apiMiddlewares from "./api/middlewares/apiMiddlewares";
import { errorHandlerMiddleware } from "./api/middlewares/errorHandlerMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false })
      .concat(apiMiddlewares)
      .concat(errorHandlerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
