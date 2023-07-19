import { useEffect, useState } from "react";
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

const KEY = "b0baf1e6";

function App() {
  const [watched, setWatched] = useState([]);
  const [movies, SetMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("hero");
  const [selectedId, setSelectedId] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("something went wrong with fetching movies");

          if (ResizeObserverEntry.Response === "False")
            throw new Error("movie not found");
          const data = await res.json();

          SetMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      handleClose();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  const handleDelete = (id) => {
    const updatedList = watched.filter((movieId) => movieId.imdbID !== id);
    setWatched(updatedList);
  };

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

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
