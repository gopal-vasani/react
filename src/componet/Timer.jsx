import React, { useRef, useState } from 'react';

export default function Timer() {

    const [state, setState] = useState(0)
    const id = useRef(0)
    console.log(id)

    function Start() {
        id.current = setInterval(() => {
            setState(prevState => prevState + 1);
            console.log(id.current);
        }, 1000);
    }

    function Stop() {
        clearInterval(id.current)
    }

    function Resert() {
        setState(0)
    }

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1>Timer {state}</h1>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Resert}>Resert</button>
        </div>
    );
}
