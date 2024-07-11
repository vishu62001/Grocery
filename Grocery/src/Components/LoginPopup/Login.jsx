import React, { useState } from 'react'
import './Login.css'

const Login = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign Up")
  return (
    <div className='login'>

     <form className='login-container' action="">
        <div className="login-title">
            <h2>{currState}</h2>
            <i onClick={()=>setShowLogin(false)} className="fa-solid fa-x"></i>
        </div>
        <div className="login-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"? "Create account":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here!</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
}
     </form>

    </div>
  )
}

export default Login