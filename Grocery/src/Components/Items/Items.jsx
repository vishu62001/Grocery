import React, { useContext} from 'react'
import './Item.css'
import ItemList from '../../assets/ItemList'
import { StoreContext } from '../../Context/StoreContext'

function Items({id,name,description,price,imageUrl}) {
  
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='item'>
<div className="item-img-container">
    <img className='item-image' src={imageUrl}></img>
    {!cartItems[id] ? <button type="button" onClick={()=>addToCart(id)} className="btn btn-warning btn2">Add to Cart<i className="fa-solid fa-plus pluscounter"></i></button>:<div className='item-counter'>
    <button onClick={()=>removeFromCart(id)} className="btn btn-warning btn1"><i className="fa-solid fa-minus" ></i></button>
      <p className='itemcount'>{cartItems[id]}</p>
      <button onClick={()=>addToCart(id)} className="btn btn-warning btn1"><i className="fa-solid fa-plus"></i></button>
      </div>}
</div>
<div className="item-info">
    <div className="item-name">
        <p>{name}</p>
    </div>
    <p className='item-desc'>{description}</p>
    <p className='item-price'>Rs.{price}</p>
</div>
    </div>
  )
}

export default Items