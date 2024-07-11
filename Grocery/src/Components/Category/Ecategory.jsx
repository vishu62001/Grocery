import React from 'react'
import './Ecategory.css'
import Category from '../../assets/Category'

function Ecategory({category, setCategory}) {
  return (
    <div className='category' id='category'>
        <h1>Explore Products</h1>
        <p className='category-p'>Grocery Store with different treasures</p>
        <div className="explore-c-list">
            {Category.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.name?"all":item.name)} key={index} className='ex-c-list-item'>
                        <img className={category===item.name?"active":""} src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Ecategory