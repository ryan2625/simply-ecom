import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../../data/products/productData'
import "../../styles/Product.css"

function Product() {

  const { product } = useParams()

  var [quantity, setQuantity] = useState(1)

  const item = items[product]

  var [price, setPrice] = useState(item.price)

  function setQuantityFunct(val){
    var pendingState = val
    if (quantity === 1 && val === -1){
      return
    }
    if (val === -1){
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
    setPrice(price => (item.price * (quantity + val)))
  }

  return (
    <div className="product-page">
      <div className="item-container">
        {/*<h1>{item.description}</h1>*/}
        <img src={item.img} alt="" />
        <div className="item-info">
          <h1>{item.description}</h1>
          <p>${item.price}</p>
          <p>{item.specs}</p>
          <div className="quantity">
            <p>Quantity: </p>
            <button onClick={() => setQuantityFunct(-1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantityFunct(1)}>+</button>
            <p>${price}</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product