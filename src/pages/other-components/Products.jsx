import React, { useEffect } from 'react'
import "../../styles/Products.css"
import { Link } from 'react-router-dom'

/**
 * Individual small product cards located in featured products slider
 * and categories page.
 * 
 * @param {number} price : Price of product
 * @param {string} name  : Name of product
 * @param {string} img   : Image of product
 * @param {string} path  : URL path to access the product's Product.jsx page
 * 
 */

function Products({ price, name, img, path }) {

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