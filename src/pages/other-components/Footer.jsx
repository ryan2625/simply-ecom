import React from 'react'
import '../../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className='footer'>
        <div className="links1">
        <div className="align">
            <h1 className='shopper'>
                SHOP
            </h1>
            <ul>
                <li><a href=""className='effecter'>Build & Price</a></li>
                <li><a href=""className='effecter'>Search Inventory</a></li>
                <li><a href=""  className='effecter'>Get a Quote</a></li>
                <li><a href="" className='effecter'>Trade-in Value</a></li>
            </ul>
            </div>
        </div>

        <div className="links1">
            <div className="align">
        <h1 className='shopper'>
                FINANCING
            </h1>
        <ul>
                <li><a href="" className='effecter'>Options</a></li>
                <li><a href="" className='effecter'>Ownership</a></li>
                <li><a href="" className='effecter'>Lorem Ipsum</a></li>
                <li><a href="" className='effecter'>Lorem Dolor</a></li>
            </ul>
        </div>
        </div>
        <div className="socials">
            <a href='#'><FacebookIcon className='socialIcon' /></a>
            <a href='#'><InstagramIcon className='socialIcon'/></a>
            <a href='#'><YouTubeIcon className='socialIcon'/></a>
            <a href='#'><TwitterIcon className='socialIcon'/></a>
        </div>
    </div>
  )
}

export default Footer