import { configureStore } from '@reduxjs/toolkit';
import {iotApi} from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [iotApi.reducerPath]: iotApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(iotApi.middleware),
});
export default store;
