
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import './CreateClass.css';


const CreateClass = ({usertype, id, setVal, name}) => {
    const [err, setError] = useState("");


    async function Submit () {

        let arr = document.getElementsByClassName("class-form-details");

  
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
               
               "usertype": usertype, 
               "id":id,
               "class":arr[0].value,
               "section":arr[1].value,
               "subject":arr[2].value
               

              })
  
}

try {


const response = await fetch(`https://nextsmartclass.herokuapp.com/createclass/create`,Options)

const data = await response.json();
if(data.data === "created successfully") {

    setVal("");
}
else 
{
    setError(data.data);
}
}
catch(error)
{
    setError("Error!!!");
}


    }

    
    async function SubmitSecond () {

        try {
            
        } catch (error) {
            
        }

        let arr = document.getElementsByClassName("stu");

  
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
               
                "usertype": usertype, 
               "id":id,
              "classcode":arr[0].value,
              "name":name
                
 
               })
            
  
}

const response = await fetch(`https://nextsmartclass.herokuapp.com/joinclass`,Options)

const data = await response.json();
   if(data.data === "joined successfully")
   {
    setVal("");
   }
   else
   {
       setError(data.data);
   }


    }



  return (
      <div className="create-class-st">
          { 
              (usertype === "student")
              ?
              <div className="create">
                  <label htmlFor="classname"><b>Class Code</b></label>
  <input className="stu" type="text" placeholder="Enter classname" name="classname" required></input>
    <button className = "create-button"  onClick = {() => {SubmitSecond()}}>Submit</button>
  

              </div>
              :
              <div className="create">
                  

<h1>Create Class</h1>
         <hr></hr>
         {
             (err !== "")
             ?
             <div className = "error">{err}</div>
             :
             <div></div>
         }
   
         <label htmlFor="classname"><b>Class Name</b></label>
  <input className="class-form-details" type="text" placeholder="Enter classname" name="classname" required></input>
  
  <label htmlFor="section"><b>Section</b></label>
  <input className="class-form-details" type="text" placeholder="enter section" name="section" required ></input>
  

  <label htmlFor="subject"><b>Subject</b></label>
  <input className="class-form-details" type="text" placeholder="Enter subject" name="subject" required></input>
  
       <button className = "create-button" onClick = {() => {Submit()}}>Submit</button>
              </div>
          }
         
  
          
      </div>

      


     

  )




}

export default CreateClass;



