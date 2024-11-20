import React, { useState } from "react";
import './ChatBox.css';

const ChatBox = () => {
    const [chatMessages, setChatMessages] = useState([
        { sender: "Alumni", message: "Hello, how can I assist you today?" },
    ]);

    const [newMessage, setNewMessage] = useState("");

    // Handle sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setChatMessages([...chatMessages, { sender: "Student", message: newMessage }]);
            setNewMessage("");
        }
    };

    return (
        <div className="chat-box-container">
            <div className="chat-box-header">
                <h3>Chat with Alumni</h3>
            </div>
            <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                    <div key={index} className={msg.sender === "Alumni" ? "message alumni" : "message student"}>
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    placeholder="Type a message..." 
                    className="chat-input-box" 
                />
                <button onClick={handleSendMessage} className="chat-send-button">Send</button>
            </div>
        </div>
    );
};

export default ChatBox;