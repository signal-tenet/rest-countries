import countriesReducer from "../redux/slices/countriesSlice";
import favCountriesReducer from "../redux/slices/wishListSlice";
import countryReducer from "../redux/slices/countryDetailsSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        countries: countriesReducer,
        favCountries: favCountriesReducer,
        country: countryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
