import React, { useEffect } from 'react'
import "../../styles/Products.css"
import { Link } from 'react-router-dom'

function Products({ price, name, img, path}) {

    var link = "/categories/" + String(path)

  return (
    <>
    <Link to={link}>
    <div className="prod-container">
        <img src={img} alt="" />
        <div className="prod-info">
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    </div>
    </Link>
    </>
  )
}

export default Products