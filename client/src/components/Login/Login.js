
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css';


const Login = () => {

    

    const [usertype,setUsertype] = useState("");

    
                 
  

  return (
      <div className="container-main">
          <nav><div>Next</div> </nav>

        {
          (usertype === "")
          ?
          <div className="signup sign-flex">
            
            <button className="sign-but" onClick = {() => {setUsertype("teacher")}}>Login as Teacher</button>
            <button className="sign-but" onClick = {() => {setUsertype("student")}}>Login as Student</button>
            <h3>or</h3>
            <h4>If you don't have any account</h4>
            <button className="sign-but">
            <Link  to={`/signup`}>
                              Signup
                                     </Link>
            </button>
            </div>
            :
           
            <LoginForm usertype = {usertype} />
              
              
     
   
            

          
        }
            

      </div>

     

  )




}

export default Login;



