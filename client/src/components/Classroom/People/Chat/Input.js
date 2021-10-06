import React from "react";

import './Chat.css';

const Input = ({ setMessage, sendMessage, message}) => {

    return (



        <div className="input-form">
           
            <input
                className="back-glass"
                type="text" 
                placeholder="Type a message"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton back-glass" onClick={e => sendMessage(e)}>Send</button>

        </div>
    )
}

export default Input;