import React, { useRef, useEffect } from 'react';
import UserPreview from "./UserPreview";

const UserPreviewList = ({ users, handleUser, updateUsers, cancelEdit }) => {
    const listRef = useRef()
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = listRef.current
        if (scrollTop + clientHeight >= scrollHeight) {
            updateUsers()
        }
    };

    useEffect(() => {
        listRef.current.addEventListener('scroll', handleScroll)
        return () => {
            listRef.current.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div className="user-list" ref={listRef} style={{ overflowY: 'auto', height: '400px' }}>
            {users.map((user) => (
                <UserPreview
                    user={user}
                    key={user.id}
                    handleUser={handleUser}
                    cancelEdit={cancelEdit}
                />
            ))}
        </div>
    );
};

export default UserPreviewList;