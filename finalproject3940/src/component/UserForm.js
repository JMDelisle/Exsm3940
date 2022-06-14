import React, { useState } from 'react';

const UserForm = (prop) => {
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            phoneNumber,
        };
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
                required />

            <br />
            <input
                type="tel"
                mode='tel'
                placeholder='Phone Number'
                pattern='^-?[0-9]\d*\.?\d*$'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <br />
            <button className='Button' onClick={() => {
                prop.onAdd({ firstName: firstName, phoneNumber: phoneNumber }); setFirstName(''); setPhoneNumber('');
            }}>Submit</button>
            {/*<input  className='Button' type='submit' value='Submit' />*/}
        </form>
    )
}

export default UserForm;