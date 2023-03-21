import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {countriesAction} from "../../redux/slices/countriesSlice";
import CountryItem from "./CountryItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import {Country} from "../../types/type";
import {RootState} from "../../app/store";

type PropType = {
    userInput: string;
};
const CountryList = ({userInput}: PropType) => {
    const countryList = useSelector(
        (state: RootState) => state.countries.countries
    );

    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const sortHandler = () => {
        if (!clicked) {
            dispatch(countriesAction.sortByNameAscending());
            setClicked(true);
        } else {
            dispatch(countriesAction.sortByNameDescending());
            setClicked(false);
        }
    };
    return (
        <div>
            <div className="loading">
                {countryList.length === 0 ? <CircularProgress/> : null}
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Flag</TableCell>
                                {clicked ? (
                                    <TableCell align="left" onClick={sortHandler}>
                                        Name ↑
                                    </TableCell>
                                ) : (
                                    <TableCell align="left" onClick={sortHandler}>
                                        Name ↓
                                    </TableCell>
                                )}
                                <TableCell align="left">Region</TableCell>
                                <TableCell align="left">Population</TableCell>
                                <TableCell align="left">Languages</TableCell>
                                <TableCell align="left">Favorites</TableCell>
                                <TableCell align="left">Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {countryList
                                .filter((country: Country) =>
                                    country.name.common
                                        .toLocaleLowerCase()
                                        .includes(userInput.toLowerCase())
                                )
                                .map((country) => (
                                    <TableRow
                                        key={crypto.randomUUID()}
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    >
                                        <CountryItem
                                            country={country}
                                            languages={country.languages}
                                        />
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default CountryList;
