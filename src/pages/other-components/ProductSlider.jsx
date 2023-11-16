import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { items } from '../../data/products/productData';
import "../../styles/ProductSlider.css"
import Products from "../other-components/Products"

function ProductSlider() {

    const featuredItems = items.slice(-10);

    return (
        <div className="products-slider">
            <div className="headliner">
                <h1>Featured Products</h1>
            </div>
            <Splide aria-label="My Favorite Images"
                options={{
                    perPage: 5,
                    perMove: 1,
                    gap: '1rem',
                    rewind: false,
                    breakpoints: {
                        1100: {
                            perPage: 4,
                        },
                        700: {
                            perPage: 2,
                        },
                    }
                }}>
                {featuredItems.map((item, index) => {
                    return (<SplideSlide>
                        <Products key={index} price={item.price} name={item.description} img={item.img} path={item.id - 1} />
                    </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default ProductSlider