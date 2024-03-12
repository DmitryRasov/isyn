import React from 'react';

const UserPreview = ({user, handleUser, cancelEdit}) => {
    const handlers = (user) => {
        handleUser(user)
        cancelEdit()
    }

    return (
            <div className="user-preview" onClick={() => handlers(user)}>
                <h5>Пользователь {user.id}</h5>
            </div>
    );
};
export default UserPreview;