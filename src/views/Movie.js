import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Movie = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = () => {
        fetch(`http://www.omdbapi.com/?apikey=be1e84c7&i=${id}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.Response === "True") {
                    setMovie(jsonResponse);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };

    return (
        <div>
            <h1>Movie Detail</h1>
            <section className="moviePage">
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    <MovieDetail movie={movie} />
                )}
            </section>
            <Link to="/" className="btn">
                Back to Home
            </Link>
        </div>
    );
};

export default Movie;
