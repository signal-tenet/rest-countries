import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import CountryItem from "../components/country/CountryItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const WishList = () => {
    const favCountries = useSelector(
        (state: RootState) => state.favCountries.favCountries
    );

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Flag</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Region</TableCell>
                        <TableCell align="left">Population</TableCell>
                        <TableCell align="left">Languages</TableCell>
                        <TableCell align="left">‎ </TableCell>
                        <TableCell align="left">‎ </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {favCountries.map((country) => (
                        <TableRow
                            key={crypto.randomUUID()}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <CountryItem country={country} languages={country.languages}/>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WishList;
