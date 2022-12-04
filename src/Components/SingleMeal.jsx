import React, { useState } from 'react'

function SingleMeal(props){
  return (
    <div className='singleMealCtn'>
      <button id = {props.id}className="button" onClick={props.onClick}>
        {props.meal}
      </button>
      <p>{props.count}</p>
    </div>
  );
}

export default SingleMeal
