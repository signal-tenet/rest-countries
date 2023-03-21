import * as React from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LanguageIcon from "@mui/icons-material/Language";
import Badge from "@mui/material/Badge";

import {RootState} from "../../app/store";

import "./NavBar.css";

type PropType = {
    userInput: string;
    setUserInput: Function;
};

function NavBar({setUserInput, userInput}: PropType) {
    // state
    const favCountries = useSelector(
        (state: RootState) => state.favCountries.favCountries
    );

    // navigate
    const navigate = useNavigate();

    // handlers
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUserInput(e.target.value);
    };

    const searchHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setUserInput(userInput);
        navigate("/countries");
    };

    const keypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            setUserInput(userInput);
            navigate("/countries");
        }
    };
    return (
        <AppBar position="static" color="default">
            <Toolbar className="toolbar">
                <div className="logo">
                    <Link to="/">
                        <div className="logo__items">
                            <LanguageIcon/>
                            <Typography variant="h6" component="div">
                                Countries
                            </Typography>
                        </div>
                    </Link>

                    <InputBase
                        className="inputBase"
                        sx={{ml: 1, flex: 1}}
                        placeholder="Search country by name"
                        inputProps={{"aria-label": "search country by name"}}
                        value={userInput}
                        onChange={changeHandler}
                        onKeyDown={keypress}
                    />
                    <IconButton
                        type="button"
                        sx={{p: "10px"}}
                        aria-label="search"
                        onClick={searchHandler}
                    >
                        <SearchIcon/>
                    </IconButton>
                </div>
                <div className="links">
                    <Link to="/">
                        <HomeIcon/>
                    </Link>
                    <Link to="/countries">
                        <PublicIcon/>
                    </Link>
                    <Link to="/wishlist">
                        <Badge
                            badgeContent={favCountries.length}
                            color="default"
                            className="badge"
                        >
                            <FavoriteBorderIcon/>
                        </Badge>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
