import {countryAction} from "../slices/countryDetailsSlice";
import {AppDispatch} from "../../app/store";
import axios from "axios";

export function fetchCountryData(url: string) {
    return async (dispatch: AppDispatch) => {
        const response = await axios.get(url);
        const countryData = response.data;
        dispatch(countryAction.getCountryData(countryData));
    };
}
