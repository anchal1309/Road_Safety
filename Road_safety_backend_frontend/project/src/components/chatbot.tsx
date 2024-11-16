import React, { useState, useEffect, ChangeEvent } from 'react';
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:5000');

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userMessage, setUserMessage] = useState<string>('');

    // Function to display message in the chat
    const displayMessage = (message: string, sender: 'user' | 'bot') => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, sender: sender },
        ]);
    };

    // Event listener for receiving bot responses
    useEffect(() => {
        socket.on('response', (response: string) => {
            displayMessage(response, 'bot');
        });

        // Cleanup on component unmount
        return () => {
            socket.off('response');
        };
    }, []);

    // Event handler for message input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    // Event handler for sending message
    const handleSendMessage = () => {
        if (userMessage.trim() !== '') {
            displayMessage(userMessage, 'user');
            socket.emit('message', userMessage); // Send message to server
            setUserMessage(''); // Clear input field
        }
    };

    // Handle Enter key press to send message
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div id="chatbot-container">
            <h1>Road Safety Chatbot</h1>
            <div id="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div id="user-input-container">
                <input
                    type="text"
                    id="user-input"
                    value={userMessage}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about road safety..."
                />
                <button onClick={handleSendMessage} id="send-btn">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
