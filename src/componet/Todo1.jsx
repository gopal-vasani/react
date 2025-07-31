import React, { useState } from 'react'
export default function Todo1() {

  const [task, setTask] = useState("")
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(null)

  function handlesubmit(e) {
    setTask(e.target.value)
  }

  function handleadd(index) {
    if (edit !== null) {
      const updatelist = [...list]
      updatelist[edit] = task
      setList(updatelist)
      setEdit(null)
    }
    else {
      setList([...list, task])
    }
    setTask("")
  }

  function handledit(index) {
    setTask(list[index])
    setEdit(index)
  }

  function handledelete(index) {
    const updatelist = [...list]
    updatelist.splice(index, 1)
    setList(updatelist)
  }

  return (

    <div>

      <input type="text" placeholder='Enter The Task' name="" id="" value={task} onChange={handlesubmit} />
      <button onClick={handleadd}>Add</button>

      <ul>
        {list.map((i, index) => (
          <li key={index}>{i}
            <button onClick={() => handledit(index)}>Edit</button>
            <button onClick={() => handledelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}
