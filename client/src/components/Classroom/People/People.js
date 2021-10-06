
import React, { useState } from 'react';

import './People.css';
import JoinedPeople from './JoinedPeople/JoinedPeople';
import Announcement from './Announcement';
import Chat from './Chat/Chat';




const People= ({classcode, socket, name, usertype}) => {
 


  return (
    <div className = "people-main people-flex-row">
       <Chat classcode = {classcode} name = {name} socket = {socket} />
        <hr className="people-hr"></hr>
        <Announcement classcode = {classcode} socket = {socket} usertype = {usertype} />
        <hr className="people-hr"></hr>
        
        <JoinedPeople classcode = {classcode} usertype = {usertype} name = {name}/> 
      
        
    </div>
   
  )




}

export default People;



