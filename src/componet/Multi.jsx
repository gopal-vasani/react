import React, { useState } from 'react';

function Multi() {
    const [text, setText] = useState('');

    const multiplication = () => {
        setText(Number(text) * 5);
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 style={styles.heading}>{text}</h1>
                <input
                    type="text"
                    placeholder="Enter Value"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={styles.input}
                />
                <button onClick={multiplication} style={styles.button}>
                    Count
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        height: '40vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(189, 211, 255)'
    },
    box: {
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        border:'2px solid black'
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '3px solid black',
        width: '200px',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white',
        border: '3px solid black',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Multi;
