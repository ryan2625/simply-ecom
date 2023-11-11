import React from 'react'
import "../../styles/Products.css"

function Products({ price, name, img}) {
  return (
    <div className="prod-container">
        <img src={img} alt="" />
        <div className="prod-info">
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default Products