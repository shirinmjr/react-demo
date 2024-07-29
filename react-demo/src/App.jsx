import "./App.css";
import Movie from "./components/Movie";

function App() {
  const fellowship = {
    id: 1,
    title: "The Fellowship of the Ring",
    hours: 2,
    minutes: 58,
    poster: "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
  };

  const towTower = {
    id: 2,
    title: "The Two Towers",
    hours: 2,
    minutes: 59,
    poster: "https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg"
  };

  const returnOfKing = {
    id: 3,
    title: "The Return of the King",
    hours: 3,
    minutes: 21,
    poster: "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
  };

  return (
    <div class='main-container'>
      <h1>Lord of the Rings</h1>

      <div className='main-contents'>
        <Movie id={fellowship.id} hours={fellowship.hours} minutes={fellowship.minutes} poster={fellowship.poster} />
        <Movie hours={towTower.hours} minutes={towTower.minutes} poster={towTower.poster} />
        <Movie
          hours={returnOfKing.hours}
          minutes={returnOfKing.minutes}
          poster={returnOfKing.poster}
        />
      </div>
    </div>
  );
}

export default App;
