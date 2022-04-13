import React, { useState, useEffect } from "react";
const BLANK_IMG = "images/imagemissing_92832.png";

const FavoriteButton = ({ movie }) => {
    const currentlyAFavorite = "NEMAM RAD";
    const notCurrentlyAFavorite = "MAM RAD";
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
                {favorite ? currentlyAFavorite : notCurrentlyAFavorite}
            </button>
        </>
    );
};

export default FavoriteButton;
