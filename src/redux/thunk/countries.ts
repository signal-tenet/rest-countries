import {countriesAction} from "../slices/countriesSlice";
import {AppDispatch} from "../../app/store";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export function fetchCountriesData() {
    return async (dispatch: AppDispatch) => {
        const response = await axios.get(url);
        const countryData = response.data;
        dispatch(countriesAction.getCountryData(countryData));
    };
}
