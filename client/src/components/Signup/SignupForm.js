
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'universal-cookie';

// import './Home.css';


const SignupForm= ({usertype}) => {

  const [check,setCheck] = useState("");
  const [error,setError] = useState("");

 
  
async function Submit() {

  let formDetails = document.getElementsByClassName("form-details");
  let first_name = formDetails[0].value
  let last_name = formDetails[1].value
  let gmail = formDetails[2].value
  let password = formDetails[3].value
  let repeatPassword = formDetails[4].value


  let Options = {
    method: 'POST',
            mode:'cors',
            cache: 'no-cache',
            
            headers: {
                         "content-type":"application/json",
                   },
            
             redirect: 'follow',
             referrerPolicy:'no-referrer',
            body: JSON.stringify({
               "type":"1",
               "userId":Date.now().toString(),
               "first_name": first_name,
               "last_name":  last_name,
                "usertype":usertype,
               "gmail": gmail,
               "password": password

              })
  
}

if(first_name === "")
{
     setError("First name field is empty!!!")
} 
else if(last_name === "")
{
  setError("Last name field is empty!!!")
} 
else if(usertype === "")
{
  setError("choose user type!!!")
} 
else if(gmail === "")
{
  setError("gmail field is empty!!!")
} 
else if(password === "")
{
  setError("password field is empty!!!")
} 
else if( password !== repeatPassword)
{
  setError("password doesn't match!!!")
} 
else
{
  
const response = await fetch(`https://nextsmartclass.herokuapp.com/sample`,Options)

const data = await response.json();
console.log(data.data);
 if(data.data === "already registered")
 {
   setError(data.data+"!!!");
 }
 else{
  const cookies = new Cookies();
  cookies.set("id",data.data);
  cookies.set("usertype",usertype);
  window.location.href = "/";
  
 }
}

}




  
  const onSuccess = async (res) => {
    console.log(res);
    let check = res;
     
      let arr = check.profileObj.name.split(' ')
  
      
    let Options = {
      method: 'POST',
              mode:'cors',
              cache: 'no-cache',
              
              headers: {
                           "content-type":"application/json",
                     },
              
               redirect: 'follow',
               referrerPolicy:'no-referrer',
              body: JSON.stringify({
                 "type":"2",
                 "usertype": usertype,
                 "id":check.profileObj.googleId,
                  "firstName":arr[0],
                 "lastName":arr[1],
                 "gmail":check.profileObj.email
                 
  
                })
  
}

const response = await fetch(`https://nextsmartclass.herokuapp.com/sample`,Options)

const data = await response.json();
console.log(data);
const cookies = new Cookies();
cookies.set("id",data.data);
  }

  const onFailure = (res) => {
    console.log(res);
  }









  return (
    
      
      // <div className="signup-form">
      
       
       <div class="container">
  <h2><span className="signup-heading ">Signup</span> <span>({usertype})</span></h2>
  {
         (error !== "")
         ?
         <div className="error">{error}</div>
         :
         <div className="errorr"></div>

       }
      


  <p>Please fill in this form to create an account.</p>
  <hr></hr>
  
  <label htmlFor="firstname"><b>First Name</b></label>
  <input className="form-details" type="text" placeholder="Enter firstname" name="firstname" required></input>
  <br></br>

  <label htmlFor="lastname"><b>Last Name</b></label>
  <input className="form-details" type="text" placeholder="Enter lastname" name="lastname" required></input>
  <br></br>
    
  

  
  <label htmlFor="gmail"><b>Gmail</b></label>
  <input className="form-details" type="text" placeholder="Enter Email" name="gmail" required></input>
  <br></br>
   
  <label htmlFor="psw"><b>Password</b></label>
  <input className="form-details" type="password" placeholder="Enter Password" name="psw" required></input>
  <br></br>
  <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
  <input className="form-details" type="password" placeholder="Repeat Password" name="psw-repeat" required ></input>
  <br></br>

  <br></br>
  <button className = "signup-submit" onClick = {()=> {Submit()}}>Submit</button>
  <span>or</span>
  {/* <h5>OR</h5> */}
  
  <GoogleLogin  
        
        clientId="1047619577038-454j1g6t3kntq9d0ljc8rmt16359mvck.apps.googleusercontent.com"
        render = {(renderProps) => (
          <button className="signup-submit" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
        )}
        onSuccess = {onSuccess}
        onFailure = {onFailure}
        icon = {false}
        cookiePolicy = {'single_host_origin'}
        isSignedIn={false}
        />
       
  </div>
  // </div>

        



   

)




}

export default SignupForm;



