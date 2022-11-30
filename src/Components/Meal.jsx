import React, { useState }from "react";
import SingleMeal from "./SingleMeal";

const meals = ["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"];

function Meal() {
    // const [count, setCount] = useState(0)

    // function handleCount() {
    //     setCount((count) => count + 1)
    // }
  return (
    <div>
      {meals.map((meal) => {
        return (
          <div >
            <SingleMeal meal = {meal} />
          </div>
        );
      })}
    </div>
  );
}

export default Meal;
