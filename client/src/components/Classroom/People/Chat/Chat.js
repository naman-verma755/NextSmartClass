
import React, { useEffect, useState } from 'react';

import './Chat.css';


import LiveChat from './LiveChat';
import Input from './Input';
import FetchRoomMessages from './FetchRoomMessages';


const Chat = ({classcode, name,socket }) => {


    const [messages, setMessages] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if(classcode !== null)
             FetchRoomMessages(classcode, setMessages);
    },[]);

     
       useEffect(() => {
           if(socket !== undefined)
        socket.on('message', ({message,name, classcode})=> {
            
             if(classcode !== null)
             FetchRoomMessages(classcode, setMessages);
        });


       },[socket])
       
       
    

      

       



    async function sendMessage(event) {
        event.preventDefault();
       
            socket.emit('sendMessage', {classcode, name, message}, () => setMessage(''));
      
    }



if(document.getElementById("chat"))
{
    var chatHistory = document.getElementById("chat");
chatHistory.scrollTop = chatHistory.scrollHeight;
}



  return (
   
        <div className = "people-main-third">
             <div className="box1-sub1-cont">
                                    <div id = "chat" className="back-glass chat-container"><LiveChat messages={messages} name={name} /></div>
                                    <div className="InputArea"><Input  message={message} setMessage={setMessage} sendMessage={sendMessage} /></div>

                                </div>
       
        </div>
        
   
   
  )




}

export default Chat;



