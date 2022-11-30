import React, { useState }from "react";
import CounterTotal from "./CounterTotal";
import SingleMeal from "./SingleMeal";

const meals = ["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"];

function Meal() {
    const [total, setTotal] = useState(0)

    function handleTotal() {
        setTotal((count) => count + 1)
    }
  return (
    <div>
      {meals.map((meal) => {
        return (
          <div >
            <SingleMeal meal = {meal} handleTotal = {handleTotal} />
          </div>
        );
      })}
      <CounterTotal total = {total} />
    </div>
  );
}

export default Meal;
