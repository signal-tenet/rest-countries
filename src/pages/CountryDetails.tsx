import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { CircularProgress } from "@mui/material";
import { AppDispatch, RootState } from "../app/store";
import "./CountryDetails.css";
import { fetchCountryData } from "../redux/thunk/country";

export default function CountryDetails() {
  const country = useSelector((state: RootState) => state.country.country);
  const name = useParams();
  const url = `https://restcountries.com/v3.1/name/${name.country}`;

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountryData(url));
  }, []);

  const arrowHandler = () => {
    navigate("/countries/");
  };

  return (
    <div className="cards">
      <div>
        {country.length !== 1 ? (
          <CircularProgress />
        ) : (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    src={country[0]?.coatOfArms?.svg}
                  />
                }
                title={country[0]?.name.official}
                subheader={country[0]?.region}
              />
              <CardMedia
                className="flag"
                component="img"
                height="194"
                image={country[0]?.flags.svg}
                alt={country[0]?.name.common}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  population: {country[0]?.population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Languages:
                </Typography>
                <ul className="languages">
                  {country[0]?.languages
                    ? Object.values(country[0]?.languages).map((lang) => (
                        <li key={crypto.randomUUID()}>{lang}</li>
                      ))
                    : null}
                </ul>
                <Typography variant="body2" color="text.secondary">
                  Borders:
                </Typography>
                <ul className="borders">
                  {country[0]?.borders
                    ? Object.values(country[0]?.borders).map((border) => (
                        <li key={crypto.randomUUID()}>{border}</li>
                      ))
                    : null}
                </ul>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="back to products' page"
                  onClick={arrowHandler}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
