import React from "react";
import FavoriteButton from "./FavoriteButton";
import "./MovieDetail.scss";
const BLANK_IMG = "images/imagemissing_92832.png";

const MovieDetail = ({ movie }) => {
    const imgSrc = movie.Poster === "N/A" ? BLANK_IMG : movie.Poster;
    const isFavorite = true;
    return (
        <div className="movieDetail">
            <h2>
                <FavoriteButton movie={movie} />
                {movie.Title}
            </h2>
            <img width="200" alt={movie.Title} src={imgSrc} />
            <dl>
                <dt>Actors:</dt>
                <dd>{movie.Actors}</dd>

                <dt>Awards:</dt>
                <dd>{movie.Awards}</dd>

                <dt>Country:</dt>
                <dd>{movie.Country}</dd>

                <dt>Director:</dt>
                <dd>{movie.Director}</dd>

                <dt>Genre:</dt>
                <dd>{movie.Genre}</dd>

                <dt>Language:</dt>
                <dd>{movie.Language}</dd>

                <dt>Released:</dt>
                <dd>{movie.Released}</dd>

                <dt>Writer:</dt>
                <dd>{movie.Writer}</dd>

                <dt>Awards:</dt>
                <dd>{movie.Awards}</dd>

                <dt>Year:</dt>
                <dd>{movie.Year}</dd>

                <dt>IMDB Rating:</dt>
                <dd>{movie.imdbRating}</dd>

                <dt>Awards:</dt>
                <dd>{movie.Awards}</dd>
            </dl>
        </div>
    );
};

export default MovieDetail;
