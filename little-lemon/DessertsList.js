function DessertsList(props) {
  // Implement the component here.
  return (
    <ul>
      {props.data
        .filter((desert) => desert.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map((dessert) => (
          <li key={dessert.name}>
            {dessert.name} - {dessert.calories} cal
          </li>
        ))}
    </ul>
  );
}

export default DessertsList;
