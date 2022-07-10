import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
/*import InputSearch from './InputSearch'*/
import ProductCard from './ProductCard'
import './style/homeScreen.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const HomeScreen = () => {


  const products = useSelector(state => state.products)

  console.log(products)

  const [productsResult, setProductsResult] = useState()
  const [search, setSearch] = useState()


   const handleChange = e => {
    setSearch(e.target.value)
    filterer(e.target.value)
    e.preventDefault()
  }

  const filterer = (searchTerm) => {
    let searchResult = products?.filter((element) => {
      if(element.title.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return element;
      }
    })
    setProductsResult(searchResult);
  }

  
   const {name} = useParams()

useEffect (() => {
  if (name) {
    setProductsResult(products?.filter(e => e.category.name === name))
  } else{
    setProductsResult(products)
  }
}, [name])
  

  return (
    <div className='home'>
      <div className='filterer'>
        <p>Filter by Product name</p>
        <input type="text" placeholder='Write a product name' value={search} onChange={handleChange}/>
      </div>
      <Filter/>
      <div className='titlePro'>
         <h2>Products</h2>
      </div>
      <div className='products-container'>
        {
          productsResult?.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen

