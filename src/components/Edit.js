import React, {useEffect, useState} from 'react';
import EditedUsers from "./EditedUsers";
import "./Edit.css";
import AddUser from "./AddUser";

function Edit() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    };
    const onAdd = async (name, email, website) => {
        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                website: website
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (response.status !== 201) {
                    return;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((error) => console.log(error));
    };
    const onEdit = async (id, name, email, website) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                email: email,
                website: website
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    return;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                const updatedUsers = users.map((user) => {
                    if (user.id === id) {
                        user.name = name;
                        user.email = email;
                        user.website = website
                    }
                    return user;
                });

                setUsers((users) => updatedUsers);
            })
            .catch((error) => console.log(error));
    };
    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (response.status !== 200) {
                    return;
                } else {
                    setUsers(
                        users.filter((user) => {
                            return user.id !== id;
                        })
                    );
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <div className='user'>
                <AddUser onAdd={onAdd}/>
                <div className='editedHeader'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Website</div>
                    <div>Actions</div>
                </div>
                {users?.map(user => (
                    <EditedUsers
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        website={user.website}
                        onEdit={onEdit}
                        onDelete={onDelete}/>
                ))}
            </div>

        </div>
    );
}

export default Edit;