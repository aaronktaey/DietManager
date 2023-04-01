import { useState } from "react";
const API_URL = process.env.REACT_APP_API_URL;
function AddItem() {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [setUnit] = useState("");
  
  const handleIngredientSelect = (e) => {
    setIngredient(e.target.value);
  };
  const handleInputQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleUnitSelect = (e) => {
    setUnit(e.target.value);
  };
  const addItem = (e) => {
    console.log(`API_URL : ${API_URL}`);
    const home = document.querySelector("#home");
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "home-item");
    newItem.innerHTML = `
      <select id="ingredient" value="${ingredient}" onChange="${handleIngredientSelect}">
        <option value="banana">바나나</option>
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
      </select>
      <input id="quantity" value="${quantity}" onChange="${handleInputQuantity}" placeholder="수량"/>
      <select id="unit" value="${ingredient}" onChange="${handleUnitSelect}">
        <option value="개">개</option>
        <option value="조각">조각</option>
        <option value="그램">그램</option>
      </select>
    `;
    home.append(newItem);
  };
  const calculate = () =>{
    console.log("계산");
  };
  return (
    <div id="home" className="home-container">
      <div className="home-item">
        <button onClick={addItem}>추가</button>
        <button onClick={calculate}>계산</button>
      </div>
      <div className="home-item">
      </div>
    </div>
  );
}

export default AddItem;
