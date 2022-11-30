import React, { useState } from 'react'

function SingleMeal(prop) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((count) => count + 1)
        prop.handleTotal()
    }
  return (
    <div className='singleMealCtn'>
      <button className="button" onClick={handleClick}>
        {prop.meal}
      </button>
      <p>{count}</p>
    </div>
  );
}

export default SingleMeal
