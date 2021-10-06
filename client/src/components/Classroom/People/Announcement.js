
import React, { useEffect, useState } from 'react';

import './People.css';





const Announcement= ({classcode, socket, usertype}) => {
  const [arr, setArr] = useState([]);

  async function fetchAnnouncementMessage() {

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
                 
                 "classcode": classcode, 
             
                 
  
                })
    
  }
  
  const response = await fetch(`https://nextsmartclass.herokuapp.com/announcement`,Options)
  
  const data = await response.json();
  let ar = data.data;
//  ar = ar.reverse();
  setArr(ar);
  }

  

  useEffect(() => {

    fetchAnnouncementMessage();
  },[]);
 
  
      
      useEffect(() => {

        if(socket !== undefined ) {

        socket.on('announcementalert',async ({message,classcode}) => {
          fetchAnnouncementMessage() 
    
           
        })

      }

 
        

      },[socket])

      
        
    

  async function submit() {
 
        let nod = document.getElementsByClassName("people-textarea");
        let message= nod[0].value;
    
       socket.emit("announcement", { classcode:classcode,message:message});
    console.log("c=",classcode);
    
}


  return (
   
    <div className = "people-main-second">
        <div className = "people-main-second-sub2 back-glass">
        
        <ul >
          
          {
          arr.reverse().map( (item ,index) => {
                   return( 
                       <li key = {index}>{item}</li>
                      )
                  })
              }
              
          </ul>
        </div>
        {
          (usertype === "teacher")
          ?
          <div className = "people-main-second-sub1" ><textarea className = "people-textarea back-glass" placeholder = "Make an announcement"></textarea><button className = "people-button back-glass" onClick = {() => {submit()}}>Go</button></div>
          :
          <div></div>
        }

       
    </div>
        
   
   
  )




}

export default Announcement;



