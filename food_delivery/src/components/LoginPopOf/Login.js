import React, { useState } from 'react'
import "./Login.css";
import { assets } from '../../assets/assets';

const Login = ({setShowLogin}) => {
const [currentState,setCurrentState] = useState('Login')

  return (
    <div className='login'>
        <form className='login-container'>
            <div className='login-title'>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
            </div>
            <div className='login-input'>
                {currentState==="Login"?<></>
                :<input type='text' placeholder='Your Name' required/>
                
                }
                <input type='email' placeholder='Your Email' required/>
                <input type='password' placeholder='Your Password' required/>
            </div>
            <button>{currentState==="Sign up"?"Create Account":"Login"}</button>
            <div className='login-condition'>
                <input type='checkbox' required />
                <p>By Continueing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==="Login"
            ?<p>Create a New Account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
        </form>
    </div>
  )
}

export default Login