import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Navbar.css"
import logo from "./logo.png" 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {

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
    <div className={shown ? "shopping-cart" : "none"}>
        <div className="overlay"></div>
        <div className="sidebar"></div>
        
    </div>
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
                    <ShoppingCartIcon onClick={() => setShown(!shown)}/>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar