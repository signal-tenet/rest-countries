import {createSlice} from "@reduxjs/toolkit";
import {Country} from "../../types/type";

type initialStateType = {
    country: Country[];
};

const initialState: initialStateType = {
    country: [],
};

const countryDetailsSlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        getCountryData: (state, action) => {
            state.country = action.payload;
        },
    },
});

export const countryAction = countryDetailsSlice.actions;
const countryReducer = countryDetailsSlice.reducer;
export default countryReducer;
