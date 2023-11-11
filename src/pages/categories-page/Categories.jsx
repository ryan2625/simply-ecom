import React, { useState } from 'react'
import "../../styles/Categories.css"
import image1 from "../../data/img/bannerImages/banner3.jpg"
import { items } from '../../data/products/productData'
import Products from '../other-components/Products'

function Categories() {

  const [products, setProducts] = useState(items)

  function handleFilter(categoryType) {
    console.log(categoryType)
    if (categoryType === "All") {
      return setProducts(items)
    }
    const categoryFilter = items.filter((item) => {
      return item.category === categoryType
    })
    setProducts(categoryFilter)
  }


  return (
    <div className='categories'>
      <div className="categories-banner">
        <img src={image1} alt="" />
      </div>
      <h1>All Products</h1>
      <ul>
        <li onClick={ () => handleFilter("All")}>All</li>
        <li onClick={ () => handleFilter("furniture")}>Furniture</li>
        <li onClick={ () => handleFilter("skin-care")}>Skincare</li>
        <li onClick={ () => handleFilter("kitchen")}>Kitchen</li>
        <li onClick={ () => handleFilter("electronic")}>Electronics</li>
        <li onClick={ () => handleFilter("lamp")}>Lamps</li>
        <li onClick={ () => handleFilter("chair")}>Chairs</li>
      </ul>
      <div className="product-grid">
        {products.map((item, index) => {
          return <Products key={index} price={item.price} name={item.description} img={item.img} />
  })}
      </div>
    </div>
  )
}

export default Categories