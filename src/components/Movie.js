import "./Movie.css";
import React from "react";

const ImageAPI = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, poster_path, overview, vote_average }) {
  let voteStyle = {};

  if (vote_average >= 8) {
    voteStyle = {
      color: "rgb(57, 191, 55)",
    };
  } else if (vote_average >= 6) {
    voteStyle = {
      color: "orange",
    };
  } else if (vote_average >= 0) {
    voteStyle = {
      color: "red",
    };
  }

  return (
    <div className="movie-box">
      <img
        className="movie-img"
        alt="img"
        src={
          poster_path
            ? ImageAPI + poster_path
            : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80"
        }
      />
      <div className="movie-info">
        <h4 className="movie-title">{title}</h4>
        <span className="movie-rating" style={voteStyle}>
          {vote_average}
        </span>
      </div>
      <div className="overview">
        <h4 className="overview-title">Overview:</h4>
        <p className="overview-info">{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
