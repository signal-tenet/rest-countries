import {createSlice} from "@reduxjs/toolkit";
import {Country} from "../../types/type";

type initialStateType = {
    favCountries: Country[];
};

const initialState: initialStateType = {
    favCountries: [],
};

const favCountriesSlice = createSlice({
    name: "favCountries",
    initialState,
    reducers: {
        addFavCountry: (state, action) => {
            if (
                state.favCountries.find(
                    (country) => country.name.common === action.payload.name.common
                )
            ) {
                return;
            } else {
                state.favCountries.push(action.payload);
            }
        },
        removeFavCountry: (state, action) => {
            const result = state.favCountries.findIndex(
                (country) => country.name.common === action.payload
            );
            if (result !== -1) {
                state.favCountries.splice(result, 1);
            }
        },
    },
});

export const favCountriesActions = favCountriesSlice.actions;
const favCountriesReducer = favCountriesSlice.reducer;
export default favCountriesReducer;
