import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntLogin {
    apiKey: string;
}

function init() {
    const localData: string | null = localStorage.getItem("apiKey");

    let initialValue: IntLogin = {
        apiKey: "",
    };

    if (localData) {
        const data = JSON.parse(localData);

        initialValue.apiKey = data;
    }
    return initialValue;
}

const initialState: IntLogin = init();

const sliceLogin = createSlice({
    name: "login",
    initialState,
    reducers: {
        AUTH(state, action: PayloadAction<IntLogin>) {
            state.apiKey = action.payload.apiKey;
        },
        LOGOUT(state) {
            state.apiKey = initialState.apiKey;
        },
    },
});

export const { AUTH, LOGOUT } = sliceLogin.actions;

export default sliceLogin.reducer;
