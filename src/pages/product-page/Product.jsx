import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { items } from '../../data/products/productData'
import { useCart } from '../../contexts/cartContext'
import "../../styles/Product.css"

function Product() {

  const { product } = useParams()
  
  const { cart, setCart } = useCart()

  var [quantity, setQuantity] = useState(1)

  const item = items[product]

  var [price, setPrice] = useState(item.price)

  function setQuantityFunct(val){
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

  function addCart() {
    var newItem = {item, quantity}
    setCart([...cart, newItem]) 
  }

    useEffect(() => {
      window.scrollTo(0,0);
  }, [])

  return (
    <div className="product-page">
      <div className="item-container">
        {/*<h1>{item.description}</h1>*/}
        <Link to="/categories">
          &#60;- Back to Categories
        </Link>
        <img src={item.img} alt="" />
        <div className="item-info">
          <h1>{item.description}</h1>
          <p>{item.specs}</p>
          <div className="quantity">
            <p>Quantity: </p>
            <button onClick={() => setQuantityFunct(-1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantityFunct(1)}>+</button>
            <p>${price}</p>
          </div>
          <button onClick={addCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product