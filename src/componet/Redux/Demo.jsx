----------------------------------------------------------------------------

App.js

import Display from "./componet/Redux/Displya";
import Todo from "./componet/Redux/Todo";

function App() {
  return (
    <>
      <Todo/>
      <Display/>
    </>
  );
}


export default App;

----------------------------------------------------------------------------

Index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './componet/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

----------------------------------------------------------------------------

Store.js

import {legacy_createStore as createStore} from "redux"
import { myReducer } from "./Reducer"


export const myStore=createStore(myReducer)

----------------------------------------------------------------------------

Todo.jsx

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { myAction } from './Action'


export default function Todo() {
  const [state, setState] = useState('')

  const dispatch = useDispatch()
  
  function AddText(e) {
    setState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(myAction(state))
  }

  return (
    <div>
      <h1>Toodo </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter data' onChange={AddText} />
        <input type="submit" />
      </form>
    </div>
  )
}

----------------------------------------------------------------------------

Reducer.js

const arr = []
export const myReducer = (state = arr, action) => {


    if (action.type == "ADD") {
        state = [
            ...state, action.data
        ]

    } else if (action.type == "Delete") {
        const update = [...state]
        update.splice(action.data, 1)
        return update

    } else if (action.type == "Edit") {
        const { i, update } = action.data;
        const newArr = [...state];
        newArr[i] = update;
        return newArr;
    }
    
    return state
}
----------------------------------------------------------------------------

Action.js

export const myAction = (data) => {
    return {
        type: "ADD",
        data
    }
}

export const deleteAction = (payload) => {
    return {
        type: "DELETE",
        payload
    }
}

export const editAction = (i, newValue) => {
    return {
        type: "EDIT",
        payload: { i, newValue }
    }
}

----------------------------------------------------------------------------

Displya.jsx

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, editAction } from './Action'

export default function Display() {
    const data = useSelector((store) => store)
    const dispatch = useDispatch()

    function deleteData(i) {
        dispatch(deleteAction(i))
    }

    function editData(i) {
        var newValue = prompt("Enter the value");
        if (newValue) {
            dispatch(editAction(i, newValue))
        }
    }

    return (
        <div>
            <h1>Display</h1>
            {
                data.map((el, i) => {
                    return (
                        <div key={i}>
                            <li>{el}</li>
                            <button onClick={() => editData(i)}>Edit</button>
                            <button onClick={() => deleteData(i)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

