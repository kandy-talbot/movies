import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

//pages
import HomePage from "./HomePage";
import DetailPage from "./MoviePage";
import FavoritesPage from "./FavoritesPage";
import NotFound from "./NotFound";

// navbar
import Navbar from "./Navbar";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<DetailPage />} />
                <Route path="/my-favorites" element={<FavoritesPage />} />
                <Route path="*" component={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
