import React from 'react'

function Categories({image, title, opening}) {
  return (
    <div>
        <span>
            <img src={image} alt="" />
            <p>{title}</p>
        </span>
        <p>{opening} Opening</p>
    </div>
  )
}

export default Categories