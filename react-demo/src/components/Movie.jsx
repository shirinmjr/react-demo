const Movie = (props) => {
  return (
    <div className='lord-movies' id={props.id}>
      <h1>Lord of the Rings</h1>
      <h2>{props.title}</h2>
      <p>
        Runtime:{props.hours}hr{props.minutes}min{" "}
      </p>
      <img id={props.id} src={props.poster} />
    </div>
  );
};

export default Movie;
