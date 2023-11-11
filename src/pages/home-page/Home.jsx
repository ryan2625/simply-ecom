import React from 'react'
import "../../styles/Home.css"
import image1  from "../../data/img/bannerImages/banner1.jpg"
import image2 from "../../data/img/bannerImages/banner2.jpg"

function Home() {
    return (
        <div className='home-container'>
            <div className="home-grid">
                <div className="home">
                    <div className="filter"></div>
                    <p>Make your house, home</p>
                </div>
                <div className="skin">
                    <div className="filter"></div>
                    <p>Skincare</p>
                </div>
                <div className="kitchen">
                    <div className="filter"></div>
                    <p>Kitchen</p>
                </div>
                <div className="electronics">
                    <div className="filter"></div>
                    <p>Electronics</p>
                </div>
            </div>

            <div className="featured-products">
                <div className="description">
                    <h1>Living in harmony</h1>
                    <p>Our wide selection of products will always leave you satisfied. See what we made special for you.</p>
                    <button>SHOP NOW</button>
                </div>
                <img src={ image1 } alt="" />
            </div>

            <div className="featured-products">
            <img src={ image2 } alt="" />
                <div className="description">
                    <h1>Living in harmony</h1>
                    <p>Our wide selection of products will always leave you satisfied. See what we made special for you.</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Home