import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import moment from "moment";

export enum sortOn {
    byDate, byActive
}

export interface satelliteParameters {
    showAs: 'map' | 'list',
    onlyActive?: boolean,
    quarter?: moment.Moment,
    sortOn?: sortOn,
    current: number,
    pageSize: number
}

const initialState: satelliteParameters = {
    showAs: 'list',
    onlyActive: false,
    quarter: undefined,
    sortOn: sortOn.byDate,
    current: 1,
    pageSize: 20,
}

export const satelliteSlice = createSlice({
    name: 'satellite',
    initialState,
    reducers: {
        updateSatelliteParameters: (state, action: PayloadAction<satelliteParameters>) => ({...state, ...action.payload}),
        setPage: (state, action: PayloadAction<{current: number, pageSize: number}>) => ({...state, ...action.payload})
    }
})

export default satelliteSlice.reducer;
