import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'
import "../../styles/Navbar.css"
import logo from "./logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Close from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Navbar() {

    const { cart, setCart } = useCart()

    const [fix, setFix] = useState(false)

    const [shown, setShown] = useState(false)

    const [quantity, setQuantity] = useState(null)

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
                        <ShoppingCartIcon onClick={() => setShown(!shown)} />
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Navbar