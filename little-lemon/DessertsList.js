function DessertsList(props) {
  // Implement the component here.
  let sortProps = props.data.sort((a, b) => a.calories - b.calories);
  let menu = sortProps.filter((desert) => desert.calories < 500);
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
