import React, { useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);


const getData = () => {
  axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
          console.log(res.data.results);
          setMovieList(res.data.results);
      });
};

useEffect(() => {
  getData();
}, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
