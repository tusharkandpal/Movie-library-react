import {useState, useEffect} from 'react';
import "./App.css";
import Show from "./components/Show";

const SearchAPI = "http://api.tvmaze.com/search/shows?q=";
const FeaturedAPI = "http://api.tvmaze.com/shows?page=1";

function App() {
const [shows, setShows] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  fetch(FeaturedAPI)
    .then(res => res.json())
    .then(data => {
      const featured = data.filter((show) => show.id <= 350 )
      setShows(featured);
      console.log(featured);
    });
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type="search" placeholder="Search a TV series" />
        </form>
      </header>
      {shows.map((show) => <Show key={show.id} {...show} />)}
    </div>
  );
}

export default App;
