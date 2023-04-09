  export function handleIngredientSelect(setIngredient){
    return(e)=>{
      setIngredient(e.target.value);
    }
  };
  export function handleInputQuantity(setQuantity){
    return(e)=>{
      setQuantity(e.target.value);
    }
  };
  export function handleUnitSelect(setUnit){
    return(e)=>{
      setUnit(e.target.value);
    }
  };