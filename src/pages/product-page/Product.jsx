import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { items } from '../../data/products/productData'
import { useCart } from '../../contexts/cartContext'
import "../../styles/Product.css"

function Product() {

  const { product } = useParams()

  const { cart, setCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const [added, setAdded] = useState(false)

  const item = items[product]

  const [price, setPrice] = useState(item.price)

  function setQuantityFunct(val) {
    if (quantity === 1 && val === -1) {
      return
    }
    if (val === -1) {
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
    setPrice(price => (item.price * (quantity + val)))
  }

  function addCart() {
    var newItem = { item, quantity }
    setCart([...cart, newItem])
    setAdded(!added)
  }

  // Don't ask me about how efficient this algo is... at least I didn't use chatGPT (:

  useEffect(() => {
    var accurateCart = []
    var quantityCart = []
    cart.map((item) =>{
        if (!(accurateCart.includes(item.item.description))){
            accurateCart.push(item.item.description) 
            quantityCart.push(item.quantity)
        } else{
            quantityCart[accurateCart.indexOf(item.item.description)] += item.quantity
        }
    })
    var newCart = []
    var i = 0
    cart.forEach((item, index) =>{
      if (!(newCart.some(e => e.item.description === item.item.description))){
        newCart.push(item)
      } else {
        i = newCart.findIndex((e => e.item.description === item.item.description))
        newCart[i].quantity += item.quantity
      }
    })
    setCart(newCart)
}, [added])

  useEffect(() => {
    window.scrollTo(0, 0);
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