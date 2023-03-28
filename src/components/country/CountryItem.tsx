/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableCell from "@mui/material/TableCell";
import { Country } from "../../types/type";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./CountryItem.css";
import { RootState } from "../../app/store";
import { favCountriesActions } from "../../redux/slices/wishListSlice";
import { useNavigate } from "react-router-dom";

type PropType = {
  country: Country;
  languages: Object;
};
const CountryItem = ({ country, languages }: PropType) => {
  const favCountries = useSelector(
    (state: RootState) => state.favCountries.favCountries
  );
  const [favClicked, setFavClicked] = useState<boolean>(
    favCountries.includes(country) ? true : false
  );
  const [favAdd, setFavAdd] = React.useState<boolean>(false);
  const [favRem, setFavRem] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const favAddHandleClick = () => {
    setFavAdd(true);
  };

  const favRemHandleClick = () => {
    setFavRem(true);
  };

  const heartClickHandler = () => {
    if (favClicked) {
      dispatch(favCountriesActions.removeFavCountry(country.name.common));
      setFavClicked(false);
      favRemHandleClick();
    } else {
      dispatch(favCountriesActions.addFavCountry(country));
      setFavClicked(true);
      favAddHandleClick();
    }
  };

  const arrowHandler = () => {
    navigate(`/countries/${country.name.common}`);
  };
  return (
    <Fragment>
      <TableCell component="th" scope="row">
        <img src={country.flags.svg} alt="flag" />
      </TableCell>
      <TableCell align="left">{country.name.common}</TableCell>
      <TableCell align="left">{country.region}</TableCell>
      <TableCell align="left">{country.population}</TableCell>
      <TableCell align="left">
        <ul>
          {languages
            ? Object.values(languages).map((lang) => (
                <li key={crypto.randomUUID()}>{lang}</li>
              ))
            : null}
        </ul>
      </TableCell>
      <TableCell align="left">
        <FavoriteBorder
          onClick={heartClickHandler}
          style={{ color: favClicked ? "red" : "" }}
        />
      </TableCell>
      <TableCell align="left">
        <KeyboardArrowRightIcon onClick={arrowHandler} />
      </TableCell>
    </Fragment>
  );
};

export default CountryItem;
