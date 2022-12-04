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
    const [total, setTotal] = useState(0)

    function handleTotal() {
        setTotal((count) => count + 1)
    }

   
  return (
    <div>
      {Object.keys(meals).map((meal) => {
        return (
          <div >
            <SingleMeal meal = {meal} count = {meals[meal]} handleTotal = {handleTotal} />
          </div>
        );
      })}
      <CounterTotal total = {total} />
      <Reset />
     
    </div>
  );
}

export default Meal;
