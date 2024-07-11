import React, { useContext } from 'react'
import './ItemDisplay.css'
import {StoreContext} from '../../Context/StoreContext'
import Items from '../Items/Items'

function ItemDisplay({category}) {

    const {ItemList} = useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'>
        <h2>We make your grocery shopping more exciting</h2>

        <div className='item-display-list'>
            {ItemList.map((item,index)=>{
            {console.log(category, item.category)} 
            if ( category==="all" || category===item.category){
              return <Items key={index} id={item.id} category={item.category} imageUrl = {item.imageUrl} name={item.name} description={item.description} price = {item.price} />
            }

            
            })}
        </div>


    </div>
  )
}

export default ItemDisplay