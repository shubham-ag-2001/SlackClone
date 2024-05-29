import React from 'react';

const NotificationList = ({ notifications }) => {
    return (
        <div>
            <h3>Notifications</h3>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationList;
