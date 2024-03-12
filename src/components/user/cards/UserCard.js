import React from 'react';
import UserHeader from "../../common/UserHeader";

const UserCard = ({user, handleEdit}) => {
    return (
        <div className='user-card-wrapper'>
            <UserHeader id={user.id}/>
            <div className='user-card-fields'>
                <h5>Имя: {user.name}</h5>
                <h5>Фамилия: {user.surname}</h5>
                <h5>Возраст: {user.age}</h5>
                <h5>Должность: {user.position}</h5>
                <h5>Компания: {user.company}</h5>
            </div>
            <button onClick={() => handleEdit(user.id)}>Редактировать</button>
        </div>
    );
};

export default UserCard;