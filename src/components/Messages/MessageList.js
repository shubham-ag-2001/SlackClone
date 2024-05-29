import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div>
            <h3>Messages</h3>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <strong>{message.sender}</strong>: {message.content} <em>{message.timestamp}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
