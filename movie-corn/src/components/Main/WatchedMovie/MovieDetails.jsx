import { useEffect, useRef, useState } from "react";
import StarRating from "../StarRating";
import Loader from "../Loader";
import { useKey } from "../../../CustomHooks/useKey";

export default function MovieDetails({
  selectedId,
  onAddWatched,
  onCloseHandler,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    console.log("clicked");
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
      runtime: Number(runtime.split(" ").at(0)),
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseHandler();
  };

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );
  useKey("Escape", onCloseHandler);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoding(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=b0baf1e6&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoding(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      return () => {
        document.title = "MovieCorn";
      };
    },
    [title]
  );
  return (
    <div className="details">
      {isLoding ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseHandler}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie.Title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handleAdd}>
                      +Add to list
                    </button>
                  )}{" "}
                </>
              ) : (
                <p>
                  You Rated with movie {watchedUserRating} <span>⭐</span>
                </p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
