import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [task, setTask] = useState([]);

    const addTask = () => {
        if (name.trim()) {
            setTask([...task, {name,email}]);
            setName("");
            setEmail("");
        }
    };


    return (
        <div>
            <h1>User Management Form</h1>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <input type="text" placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <button onClick={addTask}>Submit</button>

            <ul>
                {
                    task.map((i,j)=>(
                        <li key={j}>
                            {i.name}<br/>{i.email}<br/>
                            <button>Add</button>
                            <button>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default Form;