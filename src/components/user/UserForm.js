import React, {memo} from 'react';
import UserCard from "./cards/UserCard";
import UserEdit from "./cards/UserEdit";
import UserHeader from "../common/UserHeader";

const UserForm = memo(({user, editId, handleEdit, cancelEdit, handleSave}) => {
    const isUser = Object.keys(user).length === 0

    return (
        <div className='user-card'>
            { isUser
                ? <UserHeader/>

                :  editId === user.id

                ?  <UserEdit
                        user={user}
                        cancelEdit={cancelEdit}
                        handleSave={handleSave}
                    />

                :   <UserCard
                        user={user}
                        handleEdit={handleEdit}
                    />
            }
        </div>
    );
});

export default UserForm;