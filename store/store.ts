import {combineReducers, configureStore} from "@reduxjs/toolkit";
import satelliteSlice from "./reducers/satelliteSlice";
import {satellitesAPI} from "./api/satellitesAPI";

const rootReducer = combineReducers({
    satelliteSlice,
    [satellitesAPI.reducerPath]: satellitesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(satellitesAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
