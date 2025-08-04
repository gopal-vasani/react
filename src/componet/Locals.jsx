import React, { useEffect, useState } from 'react'

export default function Locals() {

    let sort = JSON.parse(localStorage.getItem("user")) || []

    const [task, setTask] = useState("")
    const [list, setList] = useState(sort)
    const [edit, setEdit] = useState(null)

    useEffect(()=>{
         localStorage.setItem("user", JSON.stringify(list))
    },[task])

    function handlesubmit(e){
        setTask(e.target.value)
    }

    function handleadd(index){
        if(edit !== null){
            const updateList = [...list]
            updateList[edit] = task
            setList(updateList)
            setEdit(null)
        }
        else{
            setList([...list, task])
        }
        setTask([...list,task])
    }

    function handledit(index){
        setTask(list[index])
        setEdit(index)
    }

    function handledelete(index){
        const updateList = [...list]
        updateList.splice(index, 1)
        setList(updateList)
    }

  return (
    <div>
      
      <input type="text" placeholder='Enter The Task' name="" id="" value={task} onChange={handlesubmit} />
      <button onClick={handleadd}>Add</button>

      <ul>
        {
            list.map((i, index)=>(
                <li key={index}>{i}
                <button onClick={()=>handledit(index)}>Edit</button>
                <button onClick={()=>handledelete(index)}>Delete</button>
                </li>
            ))
        }
      </ul>

    </div>
  )
}
