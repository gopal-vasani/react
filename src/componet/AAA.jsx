import React,{useState} from "react";
import BBB from './BBB'
import { myContext } from "./Context";

export default function AAA(){
    const[state, setState] = useState({
        name:"Gopal",
        email:"gopal@gmail.com"
    })

    return(
        <div>
            <h1>{state.name}</h1>

            <myContext.Provider value={state}>
                <BBB/>
            </myContext.Provider>
        </div>
    )
}