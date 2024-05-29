import React from 'react';

const DirectMessageList = ({ directMessages }) => {
    return (
        <div>
            <h3>Direct Messages</h3>
            <ul>
                {directMessages.map((message, index) => (
                    <li key={index}>
                        <strong>{message.sender}</strong>: {message.content} <em>{message.timestamp}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DirectMessageList;
