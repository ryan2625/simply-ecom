import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCategory } from '../../contexts/categoryContext'
import { items } from '../../data/products/productData';
import ProductSlider from '../other-components/ProductSlider'
import "../../styles/Home.css"
import image0 from "../../data/img/bannerImages/banner4.webp"
import image1 from "../../data/img/bannerImages/banner1.jpg"

/**
 * Home component that holds the links to different product categories as well
 * as multiple banners.
 * 
 */

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //Access category info to display the correct category when we 
    //click the different cards in the home grid.

    const { category, setCategory } = useCategory()

    return (
        <div className='home-container'>
            <div className="home-grid">
                <div className="home" onClick={() => setCategory("Furniture")}>
                    <Link to="/categories">
                        <div className="filter" ></div>
                        <p>Warm living</p>
                    </Link>
                </div>
                <div className="skin" onClick={() => setCategory("Skin-care")}>
                    <Link to="/categories">
                        <div className="filter" ></div>
                        <p>Skincare</p>
                    </Link>
                </div>
                <div className="kitchen" onClick={() => setCategory("Kitchen")}>
                    <Link to="/categories">
                        <div className="filter" ></div>
                        <p>Kitchen</p>
                    </Link>
                </div>
                <div className="electronics" onClick={() => setCategory("Electronics")}>
                    <Link to="/categories">
                        <div className="filter"></div>
                        <p>Electronics</p>
                    </Link>
                </div>
            </div>

            <ProductSlider />

            <div className="featured-products">
                <div className="description">
                    <h1>Living in harmony</h1>
                    <p>Our wide selection of products will always leave you satisfied. See what we made special for you.</p>
                    <Link to="/categories">SHOP NOW</Link>
                </div>
                <img src={image1} alt="" />
            </div>

            <div className="finance-banner">
                <img src={image0} alt="" />
                <div className="gift">
                    <h1>$300 Instant Gift</h1>
                    <p> Save $300 on a mattress and a Tempur-Pedic adjustable base of the same size. Gift automatically added in cart. Combinable with other Tempur-Pedic and Stearns & Foster promotions. Not combinable with storewide offer. Exclusions apply.</p>
                </div>
            </div>
        </div>
    )
}

export default Home