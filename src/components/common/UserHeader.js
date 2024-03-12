import React from 'react';

const UserHeader = ({id}) => {
    return (
        <div className="user-form__header">
            {id ? <h3>Пользователь {id}</h3> : <h3>Пользователь не выбран</h3>}
        </div>
    );
};

export default UserHeader;