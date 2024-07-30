function DessertsList(props) {
  // Implement the component here.
  let menu = props.data
    .filter((desert) => desert.calories < 500)
    .sort((a, b) => a.calories - b.calories);
  return (
    <ul>
      {menu.map((dessert) => (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
