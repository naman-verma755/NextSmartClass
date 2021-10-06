
import React, { useState } from 'react';
import  { GoogleLogin} from 'react-google-login';
import Cookies from 'universal-cookie';

 

const LoginForm = ({usertype}) => {

    

    // const [check,setCheck] = useState();
    const [error, setError] = useState("");


    async function submit() {
        let arr = document.getElementsByClassName("login-form-details");
     
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
                       "usertype": usertype,
                       "gmail":arr[0].value,
                       "password":arr[1].value 
                      
                       
        
                      })
           
        }
        
        const response = await fetch(`https://nextsmartclass.herokuapp.com/login`,Options)
        
        const data = await response.json();

  let res = data.data;
  if(res === "user not registered")
  {
    setError(res);
  }
  else if(res === "wrong password")
  {
    setError(res)
  }
  else if(res === "error")
  {
    setError("Some error ocurred");
  }
  else 
  {
    const cookies = new Cookies();
    cookies.set("id",data.data);
    cookies.set("usertype",usertype);
    window.location.href="/"
  
  }



    }

    const onSuccess = async (res) => {
    
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
  const cookies = new Cookies();
  cookies.set("id",data.data);
  cookies.set("usertype",usertype);
  window.location.href="/"
    }

    
    const onFailure = (res) => {
      setError("Something wrong happened")
    }
    


   

  return (
      <div className="signup-form sign-flex">
      

        
        <div className="container">
        <h2><span className="signup-heading ">Login</span> <span>({usertype})</span></h2>
  {
         (error !== "")
         ?
         <div className="error">{error}</div>
         :
         <div className="errorr"></div>

       }
      
  <p>Please fill this form to create an account.</p>
  <hr></hr>
  
  <label htmlFor="email"><b>Email</b></label>
  <input className="login-form-details" type="text" placeholder="Enter Email" name="email" required></input>
  <br></br>

  <label htmlFor="password"><b>Password</b></label>
  <input className="login-form-details" type="password" placeholder="Enter password" name="password" required></input>
  <br></br>
      

      <button className = "signup-submit" onClick = {() => {submit()}}>Submit</button>
      <br></br>
      <h2>Or</h2>
      
      <GoogleLogin  
   
        clientId="1047619577038-454j1g6t3kntq9d0ljc8rmt16359mvck.apps.googleusercontent.com"
        render = {(renderProps) => (
          <button className="signup-submit" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
        )}
        buttonText="Signup"
        icon = {false}
        buttonText="Log in with Google"
        onSuccess = {onSuccess}
        onFailure = {onFailure}
        cookiePolicy = {'single_host_origin'}
        isSignedIn={false}
        autoLoad={false}
        />

        </div>
       

        



          
      </div>


     

  )




}

export default LoginForm;



