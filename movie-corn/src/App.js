import { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Navbar/Search";
import NumResult from "./components/Navbar/NumResult";
import Box from "./components/Main/Box";
import Loader from "./components/Main/Loader";
import MovieList from "./components/Main/MovieList/MovieList";
import ErrorMessage from "./components/Main/ErrorMessage";
import WatchedMoviesList from "./components/Main/WatchedMovie/WatchedMoviesList";
import WatchedSummary from "./components/Main/WatchedMovie/WatchedSummary";
import MovieDetails from "./components/Main/WatchedMovie/MovieDetails";
import { useMovies } from "./CustomHooks/useMovies";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  //code

  function handleDelete(id) {
    const updatedList = watched.filter((movieId) => movieId.imdbID !== id);
    setWatched(updatedList);
  }

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleClose() {
    setSelectedId(null);
  }

  return (
    <div className="App">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onAddWatched={handleAddWatched}
              onCloseHandler={handleClose}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDelete}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
