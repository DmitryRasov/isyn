import React, { useRef, useEffect, useState } from 'react';
import UserPreview from "./UserPreview";

const UserPreviewList = ({ users, handleUser, updateUsers, cancelEdit }) => {
    const containerRef = useRef(null)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(7)

    useEffect(() => {
        const updateVisibleIndices = () => {
            if (!containerRef.current) return

            const containerHeight = containerRef.current.clientHeight
            const itemHeight = 50

            const newStartIndex = Math.floor(containerRef.current.scrollTop / itemHeight)
            const newEndIndex = Math.min(
                users.length - 1,
                Math.ceil((containerRef.current.scrollTop + containerHeight) / itemHeight)
            )
            setStartIndex(newStartIndex)
            setEndIndex(newEndIndex)
        }
        containerRef.current.addEventListener('scroll', updateVisibleIndices)
        updateVisibleIndices()

        return () => {
            containerRef.current.removeEventListener('scroll', updateVisibleIndices)
        }
    }, [users])

    const upd = (id) => {
        updateUsers()
        console.log(id)
    }

    return (
        <div ref={containerRef} style={{ maxHeight: '400px', overflowY: 'auto', width: '400px'}}>
            <div style={{ paddingTop: `${startIndex * 50}px`, paddingBottom: `${(users.length - endIndex - 1) * 50}px` }}>
                {users.slice(startIndex, endIndex + 1).map((user) => (
                    <UserPreview
                        key={user.id}
                        user={user}
                        handleUser={handleUser}
                        cancelEdit={cancelEdit}
                        upd={upd}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserPreviewList;
