import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import Ecategory from '../../Components/Category/Ecategory'
import ItemDisplay from '../../Components/ItemDisplay/ItemDisplay'

function Home() {

  const [category, setCategory]=useState("all")
  return (
    <div>
      <Header />
      <Ecategory category={category} setCategory={setCategory}/>
      <ItemDisplay category={category}/>
    </div>
  )
}

export default Home