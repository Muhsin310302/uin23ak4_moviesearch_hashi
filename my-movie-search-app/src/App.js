import axios from "axios"
import { useState } from "react";
import './App.css';

function App() {
  const [movie, setMovie] = useState("")

  const [drop, setDrop] = useState([])


  const search = async() => {
    const response = await axios.get('https://www.omdbapi.com/?s=james-bond&apikey=3f4fa097')
    setMovie(response.data.Search)
  }

  return (
    <div>
      <input type="text" value={drop} onChange={(event) => setDrop(event.target.value)}/>
      <button onClick={search}>Search Movie</button>

      <ul>
        {movie.map((movies) => (
          <li key={movies.imdbID}>
            <h2>{movies.Title}</h2>
            
          </li>
            
        ))}
      </ul>
    </div>
  );
}

export default App;
