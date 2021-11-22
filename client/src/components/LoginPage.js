import React from "react";
import { useState } from "react";
import LoginForm from './LoginForm'
import Navbar from "./Navbar";
import SignUpForm from './SignUpForm'

function LoginPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Navbar showAvatar={false} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">

            {showLogin ? (
              <>
                <LoginForm setUser={setUser} />

                <p className="login-box-switch text-center">
                  Don't have an account? &nbsp;
                  <button className="login-button-switch signout-button" onClick={() => setShowLogin(false)}>
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <>
                <SignUpForm setUser={setUser} />

                <p className="login-box-switch text-center">
                  Already have an account? &nbsp;
                  <button className="login-button-switch signout-button" onClick={() => setShowLogin(true)}>
                    Log In
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )

}

export default LoginPage;