import React, { useState } from 'react'

export default function Pract() {

    const [task, setTask] = useState("")
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(null)

    function handlesubmit(e){
        setTask(e.target.value)
    }

    function handleadd(i){
        if(edit !== null){
            const updatelist = [...list]
            updatelist(edit) = task
            setList(updatelist)
            setEdit(null)
        }
        else{
            setList([...list, task])
        }
        setTask("")
    }

    function handledit(i){
        setTask(list[i])
        setEdit(i)
    }

    function handledelete(i){
        const updatelist = [...list]
        updatelist.splice(i, 1)
        setList(updatelist)
    }

  return (
    <div>

        <input type="text" name="" id="" value={task} onChange={handlesubmit} placeholder='Enter The Task' />
        <button onClick={handleadd}>Add</button>

        <ul>
            {
                list.map((el, i)=>(
                    <li key={i}>{el}
                    <button onClick={()=>handledit}>Edit</button>
                    <button onClick={()=>handledelete}>Delete</button>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}
