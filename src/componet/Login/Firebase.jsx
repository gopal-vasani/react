import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue, push, remove, update } from "firebase/database";
import { app } from "../../Firebase";

const database = getDatabase(app);

export default function FirebaseDb() {
    const [input, setInput] = useState({ name: "", email: "" });
    const [users, setUsers] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const starCountRef = ref(database, "users");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userArray = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...value,
                }));
                setUsers(userArray);
            } else {
                setUsers([]);
            }
        });
    }, []);

    function sendData() {
        set(ref(database, "users/gopal"), {
            username: "gopal",
            email: "gopal@gmail.com",
        })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function addUser() {
        if (!input.name || !input.email) {
            alert("Please fill both fields");
            return;
        }
        if (editId) {
            update(ref(database, "users/" + editId), {
                name: input.name,
                email: input.email,
            }).then(() => {
                alert("User updated");
                setInput({ name: "", email: "" });
                setEditId(null);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            push(ref(database, "users"), {
                name: input.name,
                email: input.email,
            })
                .then(() => {
                    alert("User added");
                    setInput({ name: "", email: "" });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function deleteUser(id) {
        remove(ref(database, "users/" + id))
            .then(() => {
                alert("User deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function editUser(user) {
        setInput({ name: user.name, email: user.email });
        setEditId(user.id);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div>
            <hr />
            <h1>FireBase DataBase</h1>

            <button onClick={sendData}>Send Fixed Data</button><br />

            <input type="text" name="name" value={input.name} placeholder="Enter Name" onChange={handleChange} /> <br />
            <input type="text" name="email" value={input.email} placeholder="Enter Email" onChange={handleChange} /> <br />

            <button onClick={addUser}>{editId ? "Update User" : "Add User"}</button>

            <h2>Fetched Users:</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            <strong>{u.name}</strong> - {u.email}
                            <button onClick={() => editUser(u)}>Edit</button>
                            <button onClick={() => deleteUser(u.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}<hr />w
        </div>
    );
}
