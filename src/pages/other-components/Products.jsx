import React, { useEffect } from 'react'
import "../../styles/Products.css"

function Products({ price, name, img, path}) {

    var link = "/categories/" + String(path)

  return (
    <a href={link}>
    <div className="prod-container">
        <img src={img} alt="" />
        <div className="prod-info">
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    </div>
    </a>
  )
}

export default Products