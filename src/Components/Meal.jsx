import React from "react";

const meals = ["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"];

function Meal() {
  return (
    <div>
      {meals.map((meal) => {
        return (
          <div className = "singleMealCtn">
            <button className="button">{meal}</button>
            <p>0</p>
          </div>
        );
      })}
    </div>
  );
}

export default Meal;
