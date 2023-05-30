import { createReducer } from '@reduxjs/toolkit';

import { loadTimezones } from '../actions/actions';
import { TimezoneDto } from '../models/timezone-models';


interface TimezonesState {
    timezones: TimezoneDto[];
}

const initialState: TimezonesState = {
    timezones: [{ name: '', timezone: 0}]
}

export const timezoneReducer = createReducer(initialState, builder => {
    builder.addCase(loadTimezones, (state, action) => {
        state.timezones = action.payload 
    });
})
