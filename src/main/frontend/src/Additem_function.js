  function handleIngredientSelect(setIngredient){
    return(e)=>{
      setIngredient(e.target.value);
    }
  };
  function handleInputQuantity(setQuantity){
    return(e)=>{
      setQuantity(e.target.value);
    }
  };
  function handleUnitSelect(setUnit){
    return(e)=>{
      setUnit(e.target.value);
    }
  };
  export function addItem(ingredient, quantity, unit, setIngredient, setQuantity, setUnit){
    const home = document.querySelector("#home");
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "home-item");
    newItem.innerHTML = `
      <select id="ingredient" value="${ingredient}" onChange="${handleIngredientSelect(setIngredient)}">
        <option value="banana">바나나</option>
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
      </select>
      <input id="quantity" value="${quantity}" onChange="${handleInputQuantity(setQuantity)}" placeholder="수량"/>
      <select id="unit" value="${unit}" onChange="${handleUnitSelect(setUnit)}">
        <option value="개">개</option>
        <option value="조각">조각</option>
        <option value="그램">그램</option>
      </select>
    `;
    home.append(newItem);
  };
  export function calculate(){
    return()=>{
      console.log("계산");
    }
  };