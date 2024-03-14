import React, { useEffect } from 'react'

const UserPreview = ({ user, handleUser, cancelEdit, upd }) => {

    useEffect(() => {
        const loggedIds = JSON.parse(sessionStorage.getItem('loggedIds')) || []
        if (user.id % 12 === 0 && !loggedIds.includes(user.id)) {
            upd(user)
            sessionStorage.setItem('loggedIds', JSON.stringify([...loggedIds, user.id]))
        }
    }, [user, upd])

    useEffect(() => {
        const handleUnload = () => { sessionStorage.removeItem('loggedIds') }

        window.addEventListener('beforeunload', handleUnload)

        return () => { window.removeEventListener('beforeunload', handleUnload) }
    }, [])

    const handlers = (user) => {
        handleUser(user)
        cancelEdit()
    };

    return (
        <div className="user-preview" onClick={() => handlers(user)}>
            <h5>Пользователь {user.id}</h5>
        </div>
    )
}

export default UserPreview
