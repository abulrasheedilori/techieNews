import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import listOfNewsIdsReducer from "./listOfNewsIdsSlice";
import newsReducer from "./newsSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    listOfNewsIds: listOfNewsIdsReducer,
    news: newsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
