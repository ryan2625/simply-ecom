import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'
import "../../styles/Navbar.css"
import logo from "./logo.png" 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Close from '@mui/icons-material/Close';

function Navbar() {

    const { cart, setCart } = useCart()

    const [fix, setFix] = useState(false)

    const [shown, setShown] = useState(false)

    function setFixed(){
        if (window.scrollY >= 200) {
            setFix(true)
        } else{
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)

  return (<>
    <div className='overflower'>
        <div className={shown ? "overlay" : "overlay none"}></div>
        <div className={shown ? "sidebar" : "sidebar sidebar-hidden"}>
            <Close  onClick={() => setShown(!shown)}/>
            {cart.map((itemMap, index) => {
                return (<>
                    <h1>{itemMap.description2}</h1>
                    <h2>{itemMap.quantity}</h2>
                    </>
                )
            })}
        </div>
        
    </div>
    <div className={"navbar " + (fix ? "navbar-scrolled" : "navbar-default")}>
        <nav>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <ul>
                <li>
                    <Link to="/categories">
                        CATEGORIES
                    </Link>
                </li>
                <li>
                    <Link>
                        REVIEWS
                    </Link>
                </li>
                <li>
                    <ShoppingCartIcon onClick={() => setShown(!shown)}/>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar