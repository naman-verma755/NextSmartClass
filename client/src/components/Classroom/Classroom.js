
import React, { useEffect, useState } from 'react';

import './Classroom.css';
import queryString from 'query-string';
import io from 'socket.io-client';
import NavBar from '../NavBar/NavBar';
import Assignment from './Assignment/Assignment';
import People from './People/People';
import Cookies from 'universal-cookie';
import Chat from './People/Chat/Chat';
import Announcement from './People/Announcement';
import JoinedPeople from './People/JoinedPeople/JoinedPeople';




const ENDPOINT = 'https://nextsmartclass.herokuapp.com';



var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
};




const Classroom = ({location}) => {

    const {name,classname, subject, section, classcode } = queryString.parse(location.search);
    if(name === undefined || classname=== undefined ||  subject=== undefined ||  section=== undefined ||  classcode=== undefined )
    window.location.href = "/login";
    // <Link  to={`/classroom?name=${name}&classname=${item.class}&section=${item.section}&subject=${(item.subject)}&classcode=${item.classcode}`}>

    const [toggle,setToggle] = useState("1");
    const [socket, setSocket] = useState();
    const [usertype, setUsertype] = useState("");
    const [togg, setTogg] = useState(1);
              
    useEffect(() => {

        let cookies = new Cookies();     
   
        let type = cookies.get("usertype");
        setUsertype(type);

    })

    //start
    useEffect(() => {
    
        setSocket(io(ENDPOINT, connectionOptions))
        

     
    }, [ENDPOINT]);


  
    useEffect(() => {
       if(socket !== undefined)
        socket.emit('join', {classcode});

      
 
    }, [socket]);

    

  


  return (
      <div className="main">
          <NavBar />
         <div className="main-first">
         
             <div className="main-sub-second">
                 <div className = "back-glass"><h4>  {name}</h4> </div>
                 <div className = "back-glass"><h4>{subject}</h4></div>
                 <div className = "back-glass"><h4>{classname} {section}</h4></div>
                 <div className = "back-glass"><h4>{classcode}</h4></div>
             </div>
             <div className="an main-sub-second" >
                 <div className = "back-glass" onClick = {() => {setToggle("1")}}><h4>Live Talk</h4></div>
                 <div className = "back-glass" onClick = {() => {setToggle("2")}}><h4>Assignment</h4></div>
                 {/* <div><h4>Tests</h4></div> */}
             </div>
           
         </div>
         {
             (toggle === "1")
             ?
             <div className="ant ">
                 <button onClick = {() => {setTogg(1)}}><h4>Live Chat</h4></button>
                 <button onClick = {() => {setTogg(2)}}><h4>Announcements</h4></button>

                 <button onClick = {() => {setTogg(3)}}><h4>People</h4></button>        
        </div>
             :
             <div></div>
         }
         
         <div className="back-glass main-sub-first">
             
           
             
             {
                 (toggle === "1")
                 ?
                 <div className = "pep">
                 <People classcode = {classcode} socket = {socket} name = {name} usertype = {usertype}/>
                 <div className ="people-main2">
                     {
                         (togg === 1)
                         ?
                         <Chat classcode = {classcode} name = {name} socket = {socket} />
                         :
                         (togg === 2)
                         ?
                         <Announcement classcode = {classcode} socket = {socket} usertype = {usertype} />

                         :
                         <JoinedPeople classcode = {classcode} usertype = {usertype} /> 
                     }
                 </div>
            </div>
               
                :
                
                    <Assignment  classcode = {classcode} name = {name} classname = {classname} subject={subject}  section={section} usertype = {usertype}/>
 
            }
         </div>
          
      </div>


     

  )




}

export default Classroom;



