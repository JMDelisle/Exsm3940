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
                    return <UserDetail user={user} key={user.id} />;
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