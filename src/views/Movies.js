import React, { useState, useEffect } from "react";
import MovieRow from "../components/MovieRow";
import SearchForm from "../components/SearchForm";

const Movies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        updateMovies();
    }, []);

    const updateMovies = (searchValue) => {
        let searchQuery =
            searchValue || window.sessionStorage.getItem("searchValue");

        if (!searchQuery) return;

        fetch(`http://www.omdbapi.com/?apikey=be1e84c7&s=${searchQuery}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };

    const search = (searchValue) => {
        setLoading(true);
        setErrorMessage(null);
        window.sessionStorage.setItem("searchValue", searchValue);
        updateMovies();
    };

    return (
        <>
            <SearchForm
                search={search}
                searchValueCached={window.sessionStorage.getItem("searchValue")}
            />
            <section className="movies">
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <MovieRow
                            key={`${index}-${movie.imdbID}`}
                            movie={movie}
                        />
                    ))
                )}
            </section>
        </>
    );
};

export default Movies;
