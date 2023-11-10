import React from 'react'
import "../../styles/Home.css"

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
    </div>
  )
}

export default Home