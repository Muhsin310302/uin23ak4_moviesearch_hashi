import axios from "axios";
import { useState, useEffect } from "react";
import './css/main.css'
import Resultat from "./components/Resultat";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState([]);

  const Search = async (List) => {
    let url = `https://www.omdbapi.com/?apikey=3f4fa097&s=`;
    if (List === "") {
      url += "james-bond";
    } else {
      url += List;
    }
    const response = await axios.get(url);
    setMovies(response.data.Search);
  };

  useEffect(() => {
    Search("");
  }, []);

  return (
    <div className="grid-container">
      <nav>
      <h1 className="color-2">Disney-</h1>
      <Resultat onSearch={Search} />
      </nav>
      <Card movies={movies} />
    </div>
  );
}

export default App;
