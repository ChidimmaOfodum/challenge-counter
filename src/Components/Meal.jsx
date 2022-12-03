import React, { useState }from "react";
import CounterTotal from "./CounterTotal";
import SingleMeal from "./SingleMeal";
import Reset from "./Reset";

const meals = ["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"];

function Meal() {
    const [total, setTotal] = useState(0)

    function handleTotal() {
        setTotal((count) => count + 1)
    }

    // function handleReset() {
    //   setTotal(0)
    // }
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
      <Reset />
     
    </div>
  );
}

export default Meal;
