import React from 'react';
import { FixedSizeList as ListItem } from 'react-window';
import UserPreview from "./UserPreview";

const UserPreviewList = ({ users, handleUser, updateUsers, cancelEdit }) => {
    const Row = ({ index, style }) => {
        const user = users[index];
        return (
            <div style={style}>
                <UserPreview user={user} handleUser={handleUser} cancelEdit={cancelEdit}/>
            </div>
        );
    };

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

export default UserPreviewList;