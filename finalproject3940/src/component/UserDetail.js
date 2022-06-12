import React from 'react';

const UserDetail =({user}) => {
    console.log(user.firstName)
    console.log(user.phoneNumber)

    return (
        <li>
            <div className="name">{user.firstName}</div>
            <div className="phoneNumber">{user.phoneNumber}</div>
        </li>
    );
};

export default UserDetail;