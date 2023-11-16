import React, { useState, useEffect, useRef } from 'react'
import { useCategory } from '../../contexts/categoryContext'
import { Link } from 'react-router-dom'
import "../../styles/Categories.css"
import image1 from "../../data/img/bannerImages/banner3.jpg"
import { items } from '../../data/products/productData'
import Products from '../other-components/Products'

function Categories() {

  const gridRef = useRef(null)

  const { categories, setCategory } = useCategory()

  const [products, setProducts] = useState(items)

  const [category, setCategoryType] = useState("All")

  useEffect(() => {
    if (categories === null) {
      window.scrollTo(0, 0);
      return
    } else {
      handleFilter(categories)
      const executeScroll = () => gridRef.current.scrollIntoView()
      executeScroll()
      setCategory(null)
    }
  }, [])

  function handleFilter(categoryType) {
    if (categoryType === "All") {
      setCategoryType("All")
      return setProducts(items)
    }
    const categoryFilter = items.filter((item) => {
      return item.category === categoryType
    })
    setProducts(categoryFilter)
    setCategoryType(categoryType)
  }


  return (
    <div className='categories'>
      <div className="categories-banner" ref={gridRef}>
        <img src={image1} alt="" />
      </div>
      <div className="shop-by-header">
        <h1>{category}</h1>
      </div>
      <ul className='uling'>
        <Link to="/">
          &#60;- Home
        </Link>
        <li onClick={() => handleFilter("All")}>All</li>
        <li onClick={() => handleFilter("Furniture")}>Furniture</li>
        <li onClick={() => handleFilter("Skin-care")}>Skincare</li>
        <li onClick={() => handleFilter("Kitchen")}>Kitchen</li>
        <li onClick={() => handleFilter("Electronics")}>Electronics</li>
        <li onClick={() => handleFilter("Lamps")}>Lamps</li>
        <li onClick={() => handleFilter("Chairs")}>Chairs</li>
      </ul>
      <div className="product-grid">
        {products.map((item, index) => {
          return <Products key={index} price={item.price} name={item.description} img={item.img} path={item.id - 1} />
        })}
      </div>
    </div>
  )
}

export default Categories