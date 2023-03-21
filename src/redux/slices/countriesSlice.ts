import {createSlice} from "@reduxjs/toolkit";
import {Country} from "../../types/type";

type initialStateType = {
    countries: Country[];
};

const initialState: initialStateType = {
    countries: [],
};

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        getCountryData: (state, action) => {
            state.countries = action.payload;
        },
        sortByNameAscending: (state) => {
            state.countries = state.countries.sort(function (a, b) {
                const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
                if (nameA > nameB) {
                    return 1;
                }
                if (nameA < nameB) {
                    return -1;
                }

                // names must be equal
                return 0;
            });
        },
        sortByNameDescending: (state) => {
            state.countries = state.countries.sort(function (a, b) {
                const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        },
    },
});

export const countriesAction = countriesSlice.actions;
const countriesReducer = countriesSlice.reducer;
export default countriesReducer;
