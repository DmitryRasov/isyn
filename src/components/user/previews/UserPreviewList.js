import React from 'react'
import { FixedSizeList as ListItem } from 'react-window'
import UserPreview from "./UserPreview"

const UserPreviewList = ({ users, handleUser, updateUsers, cancelEdit }) => {
    const Row = ({ index, style }) => {
        const user = users[index]
        return (
            <div style={style}>
                <UserPreview upd={upd} user={user} handleUser={handleUser} cancelEdit={cancelEdit}/>
            </div>
        );
    };

    const upd = (id) => {
        updateUsers()
        console.log(id)
    }

    return (
        <ListItem
            itemCount={users.length}
            itemSize={50}
            width={400}
            height={400}
        >
            {Row}
        </ListItem>
    );
};

export default UserPreviewList