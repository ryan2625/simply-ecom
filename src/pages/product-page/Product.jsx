import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { items } from '../../data/products/productData'
import { useCart } from '../../contexts/cartContext'
import "../../styles/Product.css"
import CheckIcon from '@mui/icons-material/Check';

function Product() {

  //TODO : Extract changing state into reducer function 

  //BUG: Changing state (Fixed...?)

  const confirmation = useRef(null)

  const image1 = useRef(null)

  const image2 = useRef(null)

  const image3 = useRef(null)

  const { product } = useParams()

  const { cart, setCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const [added, setAdded] = useState(false)

  const [item, setItem] = useState(items[product])

  const [price, setPrice] = useState(item.price)

  const [imageShow, setImageShow] = useState(item.img)

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

  /**We could store previous ref and then remove class name there, but since
   * there are only 3 images, its not that inefficient to remove the class
   * from all 3 instead
   */

  function onMouse(image, ref){
    image1.current.className = " "
    image2.current.className = " "
    image3.current.className = " "
    ref.current.className = "outline"
    setImageShow(image)
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
    var newItem = { item, quantity }
    setCart([...cart, newItem])
    confirmation.current.className = "confirmation"
    setTimeout(() => {
      confirmation.current.className = "confirmation confirmation-show" 
    }, 50)
    setAdded(!added)
  }

  // Don't ask me about how efficient this algo is... at least I didn't use chatGPT for this project (:

  useEffect(() => {
    setItem(items[product])
    setPrice(items[product].price)
    setQuantity(1)
    setImageShow(items[product].img)
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
        <Link id="back-categories" to="/categories">
          &#60;- Back to Categories
        </Link>
          <img src={imageShow} alt="" />
          <div className="other-images">
            <img ref={image1} src={item.img} onMouseEnter={() => onMouse(item.img, image1)} alt="" />
            <img ref={image2} src={[item.otherImgs[0]]} onMouseEnter={() => onMouse([item.otherImgs[0]], image2)} alt="" />
            <img ref={image3} src={[item.otherImgs[1]]} onMouseEnter={() => onMouse([item.otherImgs[1]], image3)} alt="" />
          </div>
          </div>
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
      <div className="specs">
        <li>{item.texture}</li>
        <li>{item.weight}</li>
        <li>{item.size}</li>
      </div>
      </div>
    </div>
  )
}

export default Product