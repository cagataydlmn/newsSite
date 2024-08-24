import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import newsItemsReducer from "./newsItemsReducer";

const store = configureStore({
  reducer: {
    newsItems: newsItemsReducer,
  },
});

export default store;
