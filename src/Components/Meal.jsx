import React, { useState }from "react";
import CounterTotal from "./CounterTotal";
import SingleMeal from "./SingleMeal";
import Reset from "./Reset";

const meals = {
  "Vegetarian": 0, 
  "Vegan": 0,
   "Halal" : 0, 
   "Gluten-free": 0, 
   "Anything!": 0
  };

function Meal() {
  const [display, setDisplay] = useState(meals)

  const [total, setTotal] = useState(0);

  function handleDisplay(event) {
    const mealId = event.currentTarget.id
    setDisplay({...display, [mealId]: display[mealId] + 1})
    setTotal((total) => total + 1);
  }

  function handleReset(){
    setDisplay(meals)
  }
  return (
    <div>
      {Object.keys(display).map((meal) => {
        return (
          <div >
            <SingleMeal meal = {meal} count = {display[meal]} onClick = {handleDisplay} 
            id = {meal}/>
          </div>
        );
      })}
      <CounterTotal total = {total} />
      <Reset onClick = {handleReset}/>
     
    </div>
  );
}

export default Meal;
