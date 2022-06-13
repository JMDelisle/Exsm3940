import React, { useEffect } from "react";
import { connect } from 'react-redux';
import UserDetail from './UserDetail'

import { fetchUser } from "../action/userActions";

const UserList = ({ dispatch, users }) => {
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return users.length ? (
        <div className="user-list">
            <ul>
                {users.map((user) => {
                    return <li key={user.firstName}><UserDetail  user={user}  /></li>;
                })}
            </ul>
        </div>
    ) : (
        <div className="empty"> No name or phone number been used.</div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users.users,
});

export default connect(mapStateToProps)(UserList);