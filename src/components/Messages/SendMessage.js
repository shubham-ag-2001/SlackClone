import React from 'react';

const SendMessage = ({ message, onMessageChange, onSendMessage }) => {
    return (
        <form onSubmit={onSendMessage}>
            <input type="text" value={message} onChange={(e) => onMessageChange(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
};

export default SendMessage;
