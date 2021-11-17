import React from "react";
import { useState } from "react";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function LoginPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

   return(
        <div>
          
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
         
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
        </div>  
   )

}

export default LoginPage;