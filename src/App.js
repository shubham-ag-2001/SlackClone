import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ChannelList from './components/Channels/ChannelList';
import CreateChannel from './components/Channels/CreateChannel';
import ChannelMessages from './components/Channels/ChannelMessages';
import NotificationList from './components/Notifications/NotificationList';
import SearchBar from './components/Search/SearchBar';
import DirectMessageList from './components/DirectMessages/DirectMessageList';
import SendDirectMessage from './components/DirectMessages/SendDirectMessage';
import Header from './components/Header/Header';
import './App.css'

const App = () => {
    const [user, setUser] = useState(null);
    const [channels, setChannels] = useState([]);
    const [messages, setMessages] = useState({});
    const [directMessages, setDirectMessages] = useState([]);
    const [notifications, setNotifications] = useState([]);

    const handleSignup = (username, password) => {
        setUser({ username, password });
    };

    const handleLogin = (username, password) => {
        if (user && user.username === username && user.password === password) {
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleCreateChannel = (channel) => {
        setChannels([...channels, { ...channel, id: channels.length + 1 }]);
    };

    const handleSendMessage = (channelId, message) => {
        const newMessage = {
            sender: user.username,
            content: message,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages({
            ...messages,
            [channelId]: [...(messages[channelId] || []), newMessage],
        });
    };

    const handleSendDirectMessage = (message) => {
        const newMessage = {
            sender: user.username,
            content: message,
            timestamp: new Date().toLocaleTimeString(),
        };
        setDirectMessages([...directMessages, newMessage]);
    };

    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <SearchBar onSearch={handleSearch} />
                {!user ? (
                    <Routes>
                        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="*" element={<Navigate to="/signup" />} />
                    </Routes>
                ) : (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <Routes>
                            <Route
                                path="/channels"
                                element={<ChannelList channels={channels} onChannelSelect={() => {}} />}
                            />
                            <Route
                                path="/create-channel"
                                element={<CreateChannel onCreateChannel={handleCreateChannel} />}
                            />
                            <Route
                                path="/channels/:channelId"
                                element={
                                    <ChannelMessages
                                        channel={{}}
                                        messages={[]}
                                        onSendMessage={handleSendMessage}
                                    />
                                }
                            />
                            <Route
                                path="/direct-messages"
                                element={
                                    <>
                                        <DirectMessageList directMessages={directMessages} />
                                        <SendDirectMessage onSendDirectMessage={handleSendDirectMessage} />
                                    </>
                                }
                            />
                            <Route
                                path="/notifications"
                                element={<NotificationList notifications={notifications} />}
                            />
                            <Route path="*" element={<Navigate to="/channels" />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
};

export default App;
