
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import './Workspace.css';
import CreateClass from './CreateClass/CreateClass';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';


const Workspace = () => {
   
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    
    const [usertype, setUserType] = useState("");
    const [arr, setArr] = useState([]);
    const [val,setVal] = useState("");
    const [toggle, setToggle] = useState("1");

    useEffect( async ()=> {
              
   let cookies = new Cookies();     
let userid = cookies.get("id")
let type = cookies.get("usertype");
//start
if(userid === undefined || userid === "")
window.location.href = "/login";

setId(userid);
setUserType(type);


  
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
               
               "usertype": type, 
               "id":userid
               

              })
  
}

const response = await fetch(`https://nextsmartclass.herokuapp.com/userinfo`,Options)

const data = await response.json();

setName(data.firstName+" "+data.lastName)
//end



//start
var response2;
if(type === "teacher")
response2 = await fetch(`https://nextsmartclass.herokuapp.com/createclass/get`,Options)
else 
response2 = await fetch("https://nextsmartclass.herokuapp.com/getclass",Options)



const data2 = await response2.json();
setArr(data2.data);

        
    },[val])




  return (
      <div className="workspace-main">
      <NavBar />
      <div className="workspace"> 
          
       
        <div className="workspace-head back-glass">
            <div className="make-flex-center name">{name} </div>
            {
            (usertype === "student")
            ?
            (toggle === "1")
                ?
            <button className = "create-button" onClick = {() => {setVal("create");setToggle("2")}}>Join</button> 
            :
            <button className = "create-button" onClick = {() => {setVal("");setToggle("1")}}>Back</button> 
            
            :
            (toggle === "1")
            ?
        <button className = "create-button" onClick = {() => {setVal("create"); setToggle("2")}}>Create</button> 
        :
        <button className = "create-button" onClick = {() => {setVal("");setToggle("1")}}>Back</button> 
        
          }
            


            

        </div>
         
         <div className="make-flex-center work-container">
             {
                 (val === "create")
                 ?
                 <CreateClass usertype = {usertype} id = {id} setVal = {setVal} name = {name}/>
                 :
                 <div className="workspace-h">
                     {
                         (arr.length !== 0)
                         ?
                      
                         
                   
                         <div className = "classroom-list" onClick = {() => {}}>
                             {
                                 arr.map( (item,index) => {
                                     return( 
                                        <Link key = {`workspace-class-${index}`} to={`/classroom?name=${name}&classname=${item.class}&section=${item.section}&subject=${(item.subject)}&classcode=${item.classcode}`}>
                                     <div className="workspace-class back-glass ">
                                        <h3>Class Name: {item.class}</h3>
                                        <h3>Section: {item.section}</h3>
                                        <h3>Subject: {item.subject}</h3>
                                        <h3>Class Code: {item.classcode}</h3>
                                        
                                    
                                     </div>
                                     </Link>
                                     )
                                 })
                             }
                         </div>
                         
                         :
                         (usertype === "teacher")
                         ?
                         <h3 >Create Class</h3>
                         :
                         <h3>Join Class</h3>
                         
                     }
                 </div>
             }
            

         </div>
          
      </div>
      </div>


     

  )




}

export default Workspace;



