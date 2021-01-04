import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Loader from "./assets/Loader.svg";
import NoResult from "./assets/NoResult.jpg";

const Featured_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
const Search_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchResults = (API) => {
    setIsLoading(true);

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchResults(Featured_API);
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetchResults(Search_API + searchTerm);
      e.target.value = "";
    } else fetchResults(Featured_API);
  };

  const handleClick = () => {
    const app = document.querySelector(".App");
    app.classList.toggle("theme-dark");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form id="form" onSubmit={handleSubmit}>
          <input
            id="search"
            type="search"
            placeholder="Search a movie"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <button id="theme" onClick={handleClick}></button>
      </header>
      <div id="movies-container">
        {!isLoading && movies.length === 0 && (
          <img id="null_img" src={NoResult} alt="no_result" />
        )}

        {isLoading ? (
          <img src={Loader} alt="loader" />
        ) : (
          movies.map((movie) => <Movie key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
}

export default App;
