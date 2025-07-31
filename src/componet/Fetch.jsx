import React, { useEffect, useState } from "react";

function Fetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })

            .catch((error) => {
                console.log("Error:", error);
            })
    }, [])

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}>
                <strong>{user.title}</strong>
                <p>user.body</p>
            </li>
                ))}
        </ul>
        </div >
    )
}

export default Fetch;