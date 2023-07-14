export default function WatchedMovie({ watched }) {
  return (
    <div className="box">
      <button className="btn-toggle">+</button>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>️#️⃣</span>
            <span>movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>rating</span>
          </p>
          <p>
            <span>🌟</span>
            <span>rating</span>
          </p>
          <p>
            <span>⏳</span>
            <span>10 min</span>
          </p>
        </div>
      </div>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
