import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Navbar.css"
import logo from "./logo.png" 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Close from '@mui/icons-material/Close';

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
    <div className='overflower'>
        <div className={shown ? "overlay" : "overlay none"}></div>
        <div className={shown ? "sidebar" : "sidebar sidebar-hidden"}>
            <Close  onClick={() => setShown(!shown)}/>
        </div>
        
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