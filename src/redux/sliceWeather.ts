import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IntForecast, IntWeatherFull } from "../types/types";

interface IntState {
    data: IntWeatherFull[];
    forecast: IntForecast[];
}

const initialState: IntState = {
    data: [],
    forecast: [],
};

const sliceWeather = createSlice({
    name: "weather",
    initialState,
    reducers: {
        initWeather(state) {
            state = initialState;
            return state;
        },
        addCity(state, action: PayloadAction<IntWeatherFull>) {
            let en = true;
            for (let i = 0; i < state.data.length; i++) {
                if (
                    state.data[i].name.toUpperCase() ===
                    action.payload.name.toUpperCase()
                ) {
                    en = false;
                    break;
                }
            }
            if (en) {
                const newState = {
                    ...state,
                    data: [...state.data, action.payload],
                };
                return newState;
            }
            return state;
        },
        addForecast(state, action: PayloadAction<IntForecast>) {
            let en = true;
            for (let i = 0; i < state.forecast.length; i++) {
                if (
                    state.forecast[i].city.name.toUpperCase() ===
                    action.payload.city.name.toUpperCase()
                ) {
                    en = false;
                    break;
                }
            }
            if (en) {
                const newState = {
                    ...state,
                    forecast: [...state.forecast, action.payload],
                };
                return newState;
            }
            return state;
        },
    },
});

export const { initWeather, addCity, addForecast } = sliceWeather.actions;

export default sliceWeather.reducer;
