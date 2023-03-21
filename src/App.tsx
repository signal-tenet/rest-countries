// hooks and libraries
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// thunk
import {fetchCountriesData} from "./redux/thunk/countries";

// components
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import WishList from "./pages/WishList";

// types
import {AppDispatch, RootState} from "./app/store";

// styling
import "./App.css";

function App() {
    const [userInput, setUserInput] = useState<string>("");
    const countryList = useSelector(
        (state: RootState) => state.countries.countries
    );
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchCountriesData());
    }, [dispatch]);
    return (
        <div className="App">
            <NavBar setUserInput={setUserInput} userInput={userInput}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/countries"
                    element={<Countries userInput={userInput} countries={countryList}/>}
                />
                <Route path="/countries/:country" element={<CountryDetails/>}/>
                <Route path="/wishlist" element={<WishList/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
