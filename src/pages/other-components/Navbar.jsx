import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Navbar.css"
import logo from "./logo.png" 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {

    const [fix, setFix] = useState(false)

    function setFixed(){
        if (window.scrollY >= 200) {
            setFix(true)
        } else{
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)

  return (
    <div className={"navbar " + (fix ? "navbar-scrolled" : "navbar-default")}>
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>
                    <Link>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link>
                        Reviews
                    </Link>
                </li>
                <li>
                    <ShoppingCartIcon />
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar