import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChannelList = ({ channels, onChannelSelect }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Channels</h2>
            <ul>
                {channels.map((channel, index) => (
                    <li key={index} onClick={() => {
                        onChannelSelect(channel);
                        navigate(`/channels/${channel.id}`);
                    }}>
                        {channel.name}
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/create-channel')}>Create Channel</button>
        </div>
    );
};

export default ChannelList;
