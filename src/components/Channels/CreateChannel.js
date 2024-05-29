import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateChannel = ({ onCreateChannel }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateChannel({ name, description });
        navigate('/channels');
    };

    return (
        <div>
            <h2>Create Channel</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description : </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateChannel;
