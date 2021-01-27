import "./list.component.css";

function List() {
  const somethings = ["position", "display", "border", "padding", "margin", "overflow", "background", "font", "text", "transform"];
  const listItems = somethings.map((something) =>
  <li key={something.toString()}>                              
    <input type="checkbox" id="attributes" name="attributes"/>
    <label htmlFor="attributes">{something}</label>
  </li>
);

// key could also be <li key={something.id}>

  return (                   
     <ul>{listItems}</ul>
  );
}
export default List;