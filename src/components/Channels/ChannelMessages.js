import React, { useState } from 'react';
import MessageList from '../Messages/MessageList';
import SendMessage from '../Messages/SendMessage';

const ChannelMessages = ({ channel, messages, onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        onSendMessage(channel.id, message);
        setMessage('');
    };

    return (
        <div>
            <h2>{channel.name}</h2>
            <MessageList messages={messages} />
            <SendMessage message={message} onMessageChange={setMessage} onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChannelMessages;
