import { useState } from "react";

function Demo() {
    const [text, settext] = useState()
    const [list, setlist] = useState([])
    const [edit, setedit] = useState(null)

    function handelsubmit(e) {
        settext(e.target.value)
    }

    function handeladd(index) {

        if (edit !== null) {
            const updaeList = [...list]
            updaeList[edit] = text
            setlist(updaeList)
            setedit(null)
        } else {
            setlist([...list, text])

        }
        settext("")
    }

    function handeledit(index) {
        settext(list[index])
        setedit(index)
    }

    function handelDelete(index) {
        const updaeList = [...list];
        updaeList.splice(index, 1);
        setlist(updaeList)
    }


    return (
        <div>
            name: <input type="text" name="" id="" value={text} onChange={handelsubmit} placeholder="Enter name" />
            <button onClick={handeladd}>Add</button>

            <ul>
                {list.map((u, index) => (
                    <li key={index}>{u}
                        <button onClick={() => handeledit(index)}>Edit</button>
                        <button onClick={() => handelDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Demo;