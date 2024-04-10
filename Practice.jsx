import React, { useState } from 'react';


const Practice = () => {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

  function addFood() {
    const newFood = document.getElementById('inputField').value;
    document.getElementById('inputField').value = '';
    setFoods(prevFoods => [...prevFoods, newFood]);
  }

  function deleteFood(index) {
    setFoods(prevFoods => prevFoods.filter((_, i) => i !== index));
  }

  
function deleteAllFoods() {
    setFoods([]);
  }
  return (
    <div className="practice-container">
      <h2>List of Foods</h2>
      <ul className="food-list">
        {foods.map((food, index) => (
          <li key={index} onClick={() => deleteFood(index)}>{food}</li>
        ))}
      </ul>
      <div className="input-container">
        <input type="text" id="inputField" className="input-field" />
        <button onClick={addFood} className="add-button">ADD</button>
        <button onClick={deleteAllFoods} className="delete-all-button">Delete All</button>
      </div>
    </div>
  );
};

export default Practice;
