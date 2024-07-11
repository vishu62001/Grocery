import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const[menu, setMenu] = useState("home")

    // const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/' > <img className='logo' src='data:image/jpeg;base64,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'></img></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</Link>
            <a href='#category' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active":""}>Products</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active":""}>Contact Us</a>
        
        </ul>

        <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="navbar-search-icon">
        <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
        <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className='btn btn-primary'>Sign In</button>
        </div>

       
    </div>
  )
}

export default Navbar