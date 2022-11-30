import React from 'react'

function Button(prop) {
  return (
    <button className='button'>
        {prop.meal}
    </button>
  )
}

export default Button
