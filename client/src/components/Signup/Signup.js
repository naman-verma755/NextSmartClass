
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


import './Signup.css';
import SignupForm from './SignupForm';




const Signup = () => {
 

  const [check,setCheck] = useState("");
  const [error,setError] = useState("");
  const [usertype,setUserType] = useState("");
  

  return (
    <div className="container-main">
      <nav><div>Next</div></nav>
      

      {
        (usertype === "")
        ?
        <div className="signup sign-flex">
          {/* <nav><div>Smart</div></nav> */}
          <button className = "sign-but" onClick = { () => {setUserType("teacher")}}> SignUp as a Teacher</button>
          <button className = "sign-but" onClick = { () => {setUserType("student")}}> SignUP as a Student</button>
          <h3>or</h3>
            <h4>If you already have an account</h4>
            <button className = "sign-but" >
            <Link  to={`/login`}>
                              Login
                                     </Link>
            </button>
        </div>
        :
        <div className = "signup-form sign-flex"> <SignupForm className = "signup-form" usertype = {usertype} /></div>
           
      }

    </div>
  )




}

export default Signup;



