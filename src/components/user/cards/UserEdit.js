import React, {useCallback, useState} from 'react';
import UserHeader from "../../common/UserHeader";

const UserEdit = ({ user, cancelEdit, handleSave }) => {
    const [editedUser, setEditedUser] = useState({
        id: user.id,
        name: user.name,
        surname: user.surname,
        age: user.age,
        position: user.position,
        company: user.company
    });

    const handleInputChange = useCallback((fieldName, value) => {
        setEditedUser((prev) => ({ ...prev, [fieldName]: value }))
    }, [setEditedUser])

    return (
        <div>
            <UserHeader id={user.id} />
            <div className="user-card">
                <b>Имя:</b>
                <input value={editedUser.name} onChange={(e) => handleInputChange("name", e.target.value)} />
                <b>Фамилия:</b>
                <input value={editedUser.surname} onChange={(e) => handleInputChange("surname", e.target.value)} />
                <b>Возраст:</b>
                <input value={editedUser.age} onChange={(e) => handleInputChange("age", e.target.value)} />
                <b>Должность:</b>
                <input value={editedUser.position} onChange={(e) => handleInputChange("position", e.target.value)} />
                <b>Компания:</b>
                <input value={editedUser.company} onChange={(e) => handleInputChange("company", e.target.value)} />
            </div>
            <div>
                <button onClick={() => handleSave(editedUser)}>Сохранить</button>
                <button onClick={() => cancelEdit(null)}>Отмена</button>
            </div>
        </div>
    );
};

export default UserEdit;