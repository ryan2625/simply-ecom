import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useCategory } from '../../contexts/categoryContext'
import { items } from '../../data/products/productData';
import Products from "../other-components/Products"
import '@splidejs/react-splide/css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "../../styles/Home.css"
import image1  from "../../data/img/bannerImages/banner1.jpg"
import image2 from "../../data/img/bannerImages/banner2.jpg"

function Home() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const { category, setCategory } = useCategory()

    const featuredItems = items.slice(-10);

    return (
        <div className='home-container'>
            <div className="home-grid">
                <div className="home">
                    <Link to="/categories">
                        <div className="filter" onClick={() => setCategory("furniture")}></div>
                    </Link>
                    <p>Make your house, home</p>
                </div>
                <div className="skin">
                    <Link to="/categories">
                    <div className="filter" onClick={() => setCategory("skin-care")}></div>
                    </Link>
                    <p>Skincare</p>
                </div>
                <div className="kitchen">
                    <Link to="/categories">
                    <div className="filter" onClick={() => setCategory("kitchen")}></div>
                    </Link>
                    <p>Kitchen</p>
                </div>
                <div className="electronics">
                    <Link to="/categories">
                    <div className="filter" onClick={() => setCategory("electronic")}></div>
                    </Link>
                    <p>Electronics</p>
                </div>
            </div>

            <div className="products-slider">
                <div className="headliner">
                    <h1>Featured Products</h1>
                </div>
                <Splide aria-label="My Favorite Images"
                      options={ {
                        rewind: true,
                        perPage: 5,
                        perMove: 1,
                        gap   : '1rem',
                        rewind: false
                      } }>
                    {featuredItems.map((item, index) => {
                        return (<SplideSlide>
                        <Products key={index} price={item.price} name={item.description} img={item.img} path={item.id - 1} />
                        </SplideSlide>
                )})}
                </Splide>
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