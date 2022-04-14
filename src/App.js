import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Home from "./views/Home";
import Detail from "./views/Movie";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";

import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/my-favorites" element={<Favorites />} />
                <Route path="*" component={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
