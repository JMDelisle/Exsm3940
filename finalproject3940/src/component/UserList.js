import React from "react";
import { connect } from 'react-redux';
import UserDetail from './UserDetail'


const UserList = ({ users }) => {
    return users.length ? (
        <div className="book-list">
            <ul>
                {users.map((user) => {
                    return <UserDetail user={user.firstName} key={user.id} />;
                })}
            </ul>
        </div>
    ) : (
        <div className="empty"> No named been used</div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users.users,
});

export default connect(mapStateToProps)(UserList);