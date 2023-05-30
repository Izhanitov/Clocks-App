import { configureStore } from "@reduxjs/toolkit";

import { timezoneReducer } from "../reducers/timezone-reducer";


const store = configureStore({
    reducer: { timezoneReducer }    
});

export type RootState = ReturnType<typeof store.getState>

export default store;
