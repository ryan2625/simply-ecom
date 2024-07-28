import React, { useState, useEffect, useRef } from 'react'
import { useCategory } from '../../contexts/categoryContext'
import { Link } from 'react-router-dom'
import "../../styles/Categories.css"
import image1 from "../../data/img/bannerImages/banner3.jpg"
import { items } from '../../data/products/productData'
import Products from '../other-components/Products'

/**
 *  Category page holds all different products based on the category selected. 
 */

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
      const executeScroll = () => gridRef.current.scrollIntoView({block: "center"})
      executeScroll()
      setCategory(null)
    }
  }, [])

  function handleFilter(categoryType) {
    if (categoryType === "All Items") {
      setCategoryType("All Items")
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
      <div className="categories-banner" >
        <img src={image1} alt="" />
      </div>
      <div className="shop-by-header">
        <h1>{category}</h1>
      </div>
      <ul className='uling' ref={gridRef}>
        <select id="filter-select" name="Category" onChange={e => handleFilter(e.target.value)} value={category}>
          <option value="All Items">All Items</option>
          <option value="Furniture">Furniture</option>
          <option value="Skin-care">Skincare</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Electronics">Electronics</option>
          <option value="Lamps">Lamps</option>
          <option value="Chairs">Chairs</option>
        </select>
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