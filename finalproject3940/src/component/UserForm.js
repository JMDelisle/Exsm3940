import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../action/userActions';

const UserForm = ({ dispatch }) => {
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            phoneNumber,
        };
        dispatch(addUser(newUser));
        setFirstName('');
        setPhoneNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Your Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required/>

            <input type='submit' value='add user' />
        </form>
    )
}

export default connect(null)(UserForm)