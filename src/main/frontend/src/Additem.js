import { useState, useEffect } from "react";

function AddItem() {
  const [items, setItems] = useState([{ id: 0 }]);

  const addItem = () => {
    const newId = items.length;
    const newItem = {
      id: newId,
      ingredient: "banana",
      quantity: "",
      unit: "개"
    };
    setItems([...items, newItem]);
  };

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
    <div className="home-container">
      <div className="home-item">
        <button onClick={addItem}>추가</button>
        <button onClick={() => console.log("계산")}>계산</button>
      </div>
      {items.map((item) => (
        <div key={item.id} className="home-item">
          <select id={`ingredient-${item.id}`} defaultValue={item.ingredient}>
            <option value="banana">바나나</option>
            <option value="apple">사과</option>
            <option value="orange">오렌지</option>
          </select>
          <input
            id={`quantity-${item.id}`}
            defaultValue={item.quantity}
            onChange={(e) => {
              const newItems = [...items];
              newItems[item.id].quantity = e.target.value;
              setItems(newItems);
            }}
          />
          <select id={`unit-${item.id}`} defaultValue={item.unit}>
            <option value="개">개</option>
            <option value="조각">조각</option>
            <option value="그램">그램</option>
          </select>
        </div>
      ))}
    </div>
  )
}

export default AddItem;
