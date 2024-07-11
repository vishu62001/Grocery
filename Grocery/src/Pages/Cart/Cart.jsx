import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css';

function Cart() {
  const { cartItems, ItemList, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.values(cartItems).map((item, index) => {
          if (item > 0) {
            const itemInfo = ItemList.find((product) => product.id === index);
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={itemInfo.imageUrl} alt='' />
                  <p>{itemInfo.name}</p>
                  <p>Rs.{itemInfo.price}</p>
                  <p>{item}</p>
                  <p>{itemInfo.price * item}</p>
                  <p className='cross' onClick={() => removeFromCart(itemInfo.id)}>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
