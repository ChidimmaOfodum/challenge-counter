import React from "react";
import Button from "./Button";

const meals = ["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"];

function Meal() {
  return (
    <div>
      {meals.map((meal) => {
        return (
          <div className = "singleMealCtn">
            <Button meal = {meal}>
            </Button>
            <p>0</p>
          </div>
        );
      })}
    </div>
  );
}

export default Meal;
