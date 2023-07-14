import ListMovie from "./ListMovie";
import "./Main.css";
import WatchedMovie from "./WatchedMovie";

export default function Main({ movieData, watchedData }) {
  return (
    <div className="main">
      <ListMovie movieList={movieData} />
      <WatchedMovie watched={watchedData} />
    </div>
  );
}
