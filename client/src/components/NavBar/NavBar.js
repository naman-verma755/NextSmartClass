
import React, { useState } from 'react';

import Cookies from 'universal-cookie';


// import '../Signup.css';
// import SignupForm from './SignupForm';

function logout() {
    const cookies = new Cookies();
    cookies.remove("id");
    cookies.remove("usertype");
    console.log("click");
    
    window.location.href = "/"

}



const NavBar = () => {
 

 





  return (
    <nav>
      <div className="main-nav">Next</div> 
      <div onClick = {() => {logout()}}>Logout</div>
    
    
    </nav>
   
  )




}

export default NavBar;



