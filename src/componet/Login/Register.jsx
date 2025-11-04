

import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../../Firebase';


const auth = getAuth(app);
export default function Register() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function Registation(){
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            alert("success")
        })
        .catch((erro)=>{console.log(erro)
        })
    }
  return (
    <div>

        <h1>Register</h1>
        <input type="text" value={email}  name="email" onChange={(e)=>{setEmail(e.target.value)}} id="" /> <br/>
        <input type="text" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} id="" /> <br/>
        <button onClick={Registation}>Click</button>
      
    </div>
  )
}
