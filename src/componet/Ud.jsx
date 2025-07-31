import React, { useState } from "react";

function Ud() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    if (input) setTodos([...todos, input]) || setInput("");

    setTodos(todos.filter((_, i) => i !== index));

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add new todo" name=""
            />

            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ud;
