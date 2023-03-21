import React from "react";
import CountryList from "../components/country/CountryList";
import {Country} from "../types/type";

import CircularProgress from '@mui/material/CircularProgress';
import "./Countries.css"

type PropType = {
    userInput: string;
    countries: Country[];
};
const Countries = ({userInput, countries}: PropType) => {
    return (
        <div>
            {
                countries.length === 0 ? <div className="loading">
                    <CircularProgress className="loader"/>
                </div> : <CountryList userInput={userInput}/>

            }
        </div>
    );
};

export default Countries;
