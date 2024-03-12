import {useCallback, useEffect, useState} from "react";
import UserForm from "./components/user/UserForm";
import UserPreviewList from "./components/user/previews/UserPreviewList";
import {getUsers} from "./services/getUsers";

function App() {
    const [users, setUsers] = useState([])
    const [activeUser, setActiveUser] = useState({})
    const [page, setPage] = useState(1)
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        (async function () {
            const newUsers = await getUsers(page)
            setUsers([...users, ...newUsers])
        })()
    }, [page])

    const handleUser = useCallback((user) => {
        setActiveUser(user);
    }, []);

    const updateUsers = useCallback(() => {
        setPage((prevPage) => prevPage + 1);
    }, []);

    const cancelEdit = useCallback((param) => {
        setEditId(param);
    }, []);

    const handleEdit = useCallback((id) => {
        setEditId(id);
    }, []);

    const handleSave = useCallback((updatedUser) => {
        const updatedUsers = users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        setEditId(null);
        setActiveUser(updatedUser);
    }, [users]);

  return (
        <div className="wrapper">
                <UserPreviewList
                    users={users}
                    handleUser={handleUser}
                    updateUsers={updateUsers}
                    cancelEdit={cancelEdit}

                />
                <UserForm
                    user={activeUser}
                    handleEdit={handleEdit}
                    editId={editId}
                    cancelEdit={cancelEdit}
                    handleSave={handleSave}
                />
        </div>
  );
}

export default App;
