import React, { useState, useEffect } from "react";
import MovieRow from "../components/MovieRow";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    return (
        <section className="movies">
            <h1>Favorites</h1>
            {favorites.length > 0 ? (
                favorites.map((movie, index) => (
                    <MovieRow key={`${index}-${movie.imdbID}`} movie={movie} />
                ))
            ) : (
                <p>No favorites</p>
            )}
        </section>
    );
};

export default FavoritesPage;
