import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, editAction } from './Action'

export default function Display() {
    const data = useSelector((store) => store)
    console.log(data)
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