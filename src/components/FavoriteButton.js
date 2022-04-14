import React, { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import "./FavoriteButton.scss";

const FavoriteButton = ({ movie }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    const [favorite, setFavorite] = useState(() => {
        return !!favorites.find((item) => item.imdbID === movie.imdbID);
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = () => {
        setFavorites((favorites) => [...favorites, movie]);
    };
    const removeFavorite = () => {
        let newFavorites = favorites.filter((item) => {
            return item.imdbID !== movie.imdbID;
        });
        setFavorites(newFavorites);
    };
    const toogleFavorite = () => {
        favorite ? removeFavorite() : addFavorite();
        setFavorite(!favorite);
    };

    return (
        <>
            <button className="favorite" onClick={() => toogleFavorite()}>
                {favorite ? <BsHeartFill /> : <BsHeart />}
            </button>
        </>
    );
};

export default FavoriteButton;
