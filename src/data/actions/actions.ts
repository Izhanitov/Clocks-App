import { createAction } from "@reduxjs/toolkit";

import { TimezoneDto } from "../models/timezone-models";


function withPayloadType<T>() {
    return (t: T[]) => ({ payload: t })
}

export const loadTimezones = createAction('LOAD_TIMEZONES', withPayloadType<TimezoneDto>());
