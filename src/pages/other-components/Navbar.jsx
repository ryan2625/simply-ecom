import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'
import "../../styles/Navbar.css"
import logo from "./logo.png"
import shopping from "./3385483.webp"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Close from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Navbar() {

    const { cart, setCart } = useCart()

    const [fix, setFix] = useState(false)

    const [shown, setShown] = useState(false)

    const [total, setTotal] = useState(0)

    const [totalQuantity, setTotalQuantity] = useState(0)

    //Use REDUCE function here

    useEffect(() => {
        var price = 0
        var total = 0
        var totalQuantity = 0
        cart.forEach((item) => {
            price = item.quantity * item.item.price
            totalQuantity += item.quantity
            total += price
        })
        setTotal(total)
        setTotalQuantity(totalQuantity)
    }, [cart])

    function setFixed() {
        if (window.scrollY >= 200) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    function removeItem(remove) {
        var newCart = cart.filter((item) => {
            return (item.item.id !== remove.item.id)
        })
        setCart(newCart)
        console.log(newCart)
    }

    window.addEventListener('scroll', setFixed)

    return (<>
        <div className='overflower'>
            <div className={shown ? "overlay" : "overlay none"}></div>
            <div className={shown ? "sidebar" : "sidebar sidebar-hidden"}>
                <h1 id="shopping-header">Your Shopping Cart</h1>
                <Close onClick={() => setShown(!shown)} id="closer" />
                <div className="shopping-cart-list">
                    {cart.map((itemMap, index) => {
                        var path = "/categories/" + String(itemMap.item.id - 1)
                        return (<>
                            <div className="cart-prods">
                                <Link to={path}>
                                    <div className="linked">
                                        <img src={itemMap.item.img} alt="" />
                                        <h3>{itemMap.item.description}</h3>
                                        <h4>Amount: <span>{itemMap.quantity}</span></h4>
                                    </div>
                                </Link>
                                <div className='remove-item' onClick={() => removeItem(itemMap)}>
                                    <DeleteOutlineIcon />
                                </div>
                            </div>
                        </>
                        )
                    })}
                    <div className={(cart.length === 0) ? "shown" : "emptier"}>
                        <img id='empty-shopping' src={shopping} alt="" />
                        <h4 id='label-cart'>Your cart is empty!</h4>
                    </div>
                    <div className={(cart.length !== 0) ? "shown checks" : "emptier"}>
                        <button>CHECKOUT</button>
                        <h2>Your Total: {total}$</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className={"navbar " + (fix ? "navbar-scrolled" : "navbar-default")}>
            <nav>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <ul>
                    <li>
                        <Link to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories">
                            CATEGORIES
                        </Link>
                    </li>
                    <li>
                        {/*We could add conditional rendering to increase the size of the cart size indicator (i.e if 10 items, increase width so the numbers dont overflow.*/}
                        <div className="shopping-icon">
                            <p className={(cart.length !== 0) ? "shown" : "emptier"}><span>{totalQuantity}</span></p>
                            <ShoppingCartIcon onClick={() => setShown(!shown)} />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Navbar