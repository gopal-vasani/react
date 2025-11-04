// With Google

import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {app} from '../../Firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login() {

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

    function signInWithGoogle (){
      signInWithPopup(auth, provider)
    };

  return (
    <div>

        <h1>Login</h1>
        <input type="text" value={email}  name="email" onChange={(e)=>{setEmail(e.target.value)}} id="" /> <br/>
        <input type="text" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} id="" /> <br/>
        <button onClick={signInWithGoogle}>Signin With Google</button>
        <button onClick={Registation}>Click</button>
      
    </div>
  )
}
