import React, { useEffect, useState, useRef, useReducer } from 'react'
import productReducer from '../../reducer/ProductReducer'
import { useParams, Link } from 'react-router-dom'
import { items } from '../../data/products/productData'
import { useCart } from '../../contexts/cartContext'
import ProductSlider from '../other-components/ProductSlider'
import "../../styles/Product.css"
import CheckIcon from '@mui/icons-material/Check';

/**
 * 
 * Component renders product information based on the product id retrieved from the URL.
 * Can access this component from the cart, categories page, and the featured products slider.
 * 
 * State reducer can be found in ./reducers/ProductReducer.jsx
 * 
 */

function Product() {

  const confirmation = useRef(null)

  const image1 = useRef(null)

  const image2 = useRef(null)

  const image3 = useRef(null)

  const { product } = useParams()

  const { cart, setCart } = useCart()

  const [added, setAdded] = useState(false)

  const [state, dispatch] = useReducer(productReducer, {
    item : items[product],
    image : items[product].img,
    price : items[product].price,
    quantity : 1,
  })

  function setQuantityFunct(val) {
    if (state.quantity === 1 && val === -1) {
      return
    }
    if (val === -1) {
      dispatch({type : "DECREMENT"})
    } else {
      dispatch({type : "INCREMENT"})
    }
    dispatch({type : "SET_PRICE", payload : state.item.price * (state.quantity + val)})
  }

  /**We could store previous ref and then remove class name there, but since
   * there are only 3 images, its not that inefficient to remove the class
   * from all 3 instead. This function changes the main picture based on 
   *  which image you hover.
   * 
   * image1 is outlined by default, as it is always displayed first. 
   */

  function resetRef(){
    image1.current.className = "outline"
    image2.current.className = " "
    image3.current.className = " "
  }

  function onMouse(image, ref) {
    image1.current.className = " "
    image2.current.className = " "
    image3.current.className = " "
    ref.current.className = "outline"
    dispatch({type : "SET_IMG", payload : image})
  }
  /**
   *  This method adds the new item to the cart. I also show the
   *  confirmation modal telling the user that they have successfully
   *  added the item to the cart. 
   * 
   *  I initially used a setTimeout function to remove the
   *  confirmation modal after 2 seconds by setting confirmation
   *  .current.className to confirmation, making it slide off the
   *  screen. The problem here was that I was referring to the element
   *  confirmation with the useRef hook. This ref is only available
   *  in the product component causing an error if I switched pages
   *  while the modal was open. Fixed by using an animation so I 
   *  won't need the ref.
   * 
   */

  function addCart() {
    var tempItem = state.item
    var tempQuantity = state.quantity
    var newItem = { item: tempItem, quantity: tempQuantity }
    setCart([...cart, newItem ])
    confirmation.current.className = "confirmation"
    setTimeout(() => {
      confirmation.current.className = "confirmation confirmation-show"
    }, 50)
    setAdded(!added)
  }

  /**
   * 
   * Useeffect checks if item is in cart. If it isn't it adds it. If it is,
   * it finds the index of the item and updates its quantity. It also 
   * makes sure the item information updates when we switch products.
   * 
   * Don't ask me about how efficient this algo is... at least I didn't use chatGPT for this project (:
   * 
   * */

  useEffect(() => {
    resetRef()
    dispatch({type : "RESET", payload : items[product]})
    var accurateCart = []
    var quantityCart = []
    cart.map((item) => {
      if (!(accurateCart.includes(item.item.description))) {
        accurateCart.push(item.item.description)
        quantityCart.push(item.quantity)
      } else {
        quantityCart[accurateCart.indexOf(item.item.description)] += item.quantity
      }
    })
    var newCart = []
    var i = 0
    cart.forEach((item, index) => {
      if (!(newCart.some(e => e.item.description === item.item.description))) {
        newCart.push(item)
      } else {
        i = newCart.findIndex((e => e.item.description === item.item.description))
        newCart[i].quantity += item.quantity
      }
    })
    setCart(newCart)
  }, [added, product])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="product-page">
      <div className="confirmation" ref={confirmation}>
        <h4>Added to cart</h4>  <span><CheckIcon /></span>
      </div>
      <div className="item-card">
        <div className="item-container">
          {/*<h1>{item.description}</h1>*/}
          <div className="image-options">
            <Link class="back-categories bc1" to="/categories">
              &#60;- Back to Categories
            </Link>
            <img src={state.image} alt="" />
            <div className="other-images">
              <img ref={image1} src={items[product].img} onMouseEnter={() => onMouse(items[product].img, image1)} alt="" />
              <img ref={image2} src={[state.item.otherImgs[0]]} onMouseEnter={() => onMouse([state.item.otherImgs[0]], image2)} alt="" />
              <img ref={image3} src={[state.item.otherImgs[1]]} onMouseEnter={() => onMouse([state.item.otherImgs[1]], image3)} alt="" />
            </div>
          </div>
          <div className="item-info">
          <Link class="back-categories bc2" to="/categories">
              &#60;- Back to Categories
            </Link>
            <h1>{state.item.description}</h1>
            <p>{state.item.specs}</p>
            <div className="quantity">
              <p>Quantity: </p>
              <button onClick={() => setQuantityFunct(-1)}>-</button>
              <p>{state.quantity}</p>
              <button onClick={() => setQuantityFunct(1)}>+</button>
              <p>${state.price}</p>
            </div>
            <button onClick={addCart}>Add to Cart</button>
          </div>
        </div>
        <div className="specs">
          <li>Texture: {state.item.texture}</li>
          <li>Weight: {state.item.weight}</li>
          <li>Dimensions: {state.item.size}</li>
        </div>
        <ProductSlider />
      </div>
    </div>
  )
}

export default Product