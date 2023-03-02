import './ReactPrac.css'
import {useState} from 'react'

function ReactPrac() {
  const [nextId, setNextId] = useState(0);
  const [ingredientInput, setIngredientInput] = useState('');
  const [quantityInput, setQuantityInput] = useState('');

  const calcModal= () =>{
    const dialog = document.querySelector('#calculateDialog');
    dialog.showModal();
  }
  const buttonClicked = (e) =>{
    console.log(e.target.value);
  }
  
  const [itemList, setItemList] = useState([
  ]);

  const itemListHTML = 
    itemList.map(item => 
      <div key={item.id} className="reactprac-item">
        <span>{item.ingredient} {item.quantity}그램</span>
      </div>
    )

  const handleingredientInput = (e) =>{
    setIngredientInput(e.target.value);
  }
  const handlequantityInput = (e) =>{
    setQuantityInput(e.target.value);
  }
  const addItem = (e) =>{
    if(ingredientInput === '' || quantityInput === ''){
      alert('오늘 먹은 음식과 양을 입력해주세요.');
      return;
    }
    console.log(nextId);
    setItemList(itemList.concat(
      { id  : nextId, ingredient : ingredientInput , quantity : quantityInput}
    ));
    setNextId(nextId + 1);
    setIngredientInput('');
    setQuantityInput('');
    console.log(itemList);
  }

  return (
    <div id="ReactPrac" className="reactprac-container">
      <div className="reactprac-item">
        <h1>
          Page ReactPrac.
        </h1>
      </div>
      <div className="reactprac-item">
        오늘 먹은 것 : &nbsp;
        <input onChange={handleingredientInput} value={ingredientInput}/>
        <input onChange={handlequantityInput} value={quantityInput}/>그램&nbsp;
        <button onClick={addItem}>추가</button>
      </div>
      {itemListHTML}
      <div className="reactprac-item">
        <button onClick={calcModal}>계산하기</button>
        <dialog id='calculateDialog'>
          Dialog Test!!
          <form method='dialog'>
            <p>계산결과를 보여준다.</p>
            <button onClick={buttonClicked} value='apply'>Apply</button>
            <button onClick={buttonClicked} value='close'>Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default ReactPrac;
