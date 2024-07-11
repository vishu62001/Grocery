import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header-content'>
            <h2>Fresh Groceries Delivered to Your Doorstep</h2>
            <p>At V-Grocery, we offer a wide selection of fresh produce, pantry staples, and household essentials, all delivered straight to your door. Enjoy convenient online shopping and quick delivery, making your grocery shopping effortless and efficient.</p>

            <button type="button" className="btn btn-warning btn-lg">Shop Now</button>
        </div>
    </div>
  )
}

export default Header