import React from "react";
import UserDetail from './UserDetail'


const UserList = (prop) => {
//console.log(prop);
    return (
        <div className="user-list">
            <ul>
                {prop.data.users.map((user) => {
                    return <li key={user.firstName}><UserDetail user={user}  /></li>;
                })}
            </ul>
        </div>
    );
};


export default UserList;