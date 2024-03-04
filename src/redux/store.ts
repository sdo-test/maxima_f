import { configureStore } from "@reduxjs/toolkit";
import sliceLogin from "./sliceLogin";
import sliceWeather from "./sliceWeather";

export const store = configureStore({
    reducer: {
        login: sliceLogin,
        weather: sliceWeather,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
