const getData = () => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    )
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
};

const addMovie = (movie) => {
  setList((prevList) => {
    return [...prevList, movie];
  });
};

const removeMovie = (removedMovie) => {
  const newState = list.filter((movie) => {
    return movie != removedMovie;
  });
  setList(newState);
};

useEffect(() => {
  getData();
}, [page]);

return (
  <div className="App">
    <Header />
    <main>
      <MovieScreen
        page={page}
        setPage={setPage}
        movieList={movieList}
        list={list}
        addMovie={addMovie}
        removeMovie={removeMovie}
      />
      <Watchlist list={list} addMovie={addMovie} removeMovie={removeMovie} />
    </main>
  </div>
);
