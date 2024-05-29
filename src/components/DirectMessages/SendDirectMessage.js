import React, { useState } from 'react';

const SendDirectMessage = ({ onSendDirectMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        onSendDirectMessage(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSendMessage}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
};

export default SendDirectMessage;
