import React from 'react'
import '../../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

/**
 * Simple footer that holds dummy text.
 * 
 */

function Footer() {
    return (
        <div className='footer'>
            <div className="links1">
                <div className="align">
                    <h1 className='shopper'>
                        SHOP
                    </h1>
                    <ul>
                        <li><a href="" className='effecter'>Design Services</a></li>
                        <li><a href="" className='effecter'>Digital Catalog</a></li>
                        <li><a href="" className='effecter'>Store Locator</a></li>
                        <li><a href="" className='effecter'>Warranty</a></li>
                    </ul>
                </div>
            </div>

            <div className="links1">
                <div className="align">
                    <h1 className='shopper'>
                        FINANCING
                    </h1>
                    <ul>
                        <li><a href="" className='effecter'>Price Match</a></li>
                        <li><a href="" className='effecter'>Ownership</a></li>
                        <li><a href="" className='effecter'>FAQ</a></li>
                        <li><a href="" className='effecter'>Lease to Own</a></li>
                    </ul>
                </div>
            </div>
            <div className="socials">
                <a href='#'><FacebookIcon className='socialIcon' /></a>
                <a href='#'><InstagramIcon className='socialIcon' /></a>
                <a href='#'><YouTubeIcon className='socialIcon' /></a>
                <a href='#'><TwitterIcon className='socialIcon' /></a>
            </div>
        </div>
    )
}

export default Footer