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
            type="tel"
            placeholder='Your Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required/>
            
            <br/>
            <input
            type="number"
            placeholder='Phone Number'
            pattern="^-?[0-9]\d*\.?\d*$"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)
            }
            />



            <input type='submit' value='Submit' />
        </form>
    )
}

export default connect(null)(UserForm)