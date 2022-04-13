import React from "react";
import { Link } from "react-router-dom";
const BLANK_IMG = "images/imagemissing_92832.png";

const MovieRow = ({ movie }) => {
    const imgSrc = movie.Poster === "N/A" ? BLANK_IMG : movie.Poster;
    return (
        <div className="movieRow">
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <img width="100" alt={movie.Title} src={imgSrc} />
                <div>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieRow;
