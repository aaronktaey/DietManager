import { useState, useEffect } from "react";
import { calculate, addItem }from "./Additem_function"

function AddItem() {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    fetch("/data/foods.csv")
      .then((response) => response.text())
      .then((data) => {
        data.split("\n").forEach((row) => {
          // const fields = row.split(",");
          console.log(`row: ${row}`);
        });
      });
  }, []);
  return (
    <div id="home" className="home-container">
      <div className="home-item">
        <button onClick={addItem(ingredient,quantity, unit ,setIngredient, setQuantity, setUnit)}>추가</button>
        <button onClick={calculate}>계산</button>
      </div>
      <div className="home-item"></div>
    </div>
  );
}

export default AddItem;
