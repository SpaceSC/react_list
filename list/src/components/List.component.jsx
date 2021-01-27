import "./list.component.css";

function List() {
  const something = ["position", "display", "border", "padding", "margin", "overflow", "background", "font", "text", "transform"];
  const listItems = something.map((something) =>
  <li>                              
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    <label for="vehicle1">{something}</label>
  </li>
);

  return (                   
     <ul>{listItems}</ul>
  );
}
export default List;