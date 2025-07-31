import React, { useState } from "react";

function Explorer({ modeType }) {
    const styles = {
        backgroundColor: modeType === 'dark' ? '#1e1e2f' : '#ffffff',
        color: modeType === 'dark' ? '#ffffff' : '#111111',
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        transition: '0.3s',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
            <div style={styles}>
                <h2>{modeType === 'dark' ? 'Dark Mode' : 'Light Mode'}</h2>
                <p>This is a simple theme box using props.</p>
            </div>
        </div>
    );
}

export function ExplorerCalculator({ modeType }) {
    const [value, setValue] = useState('');

    const handleMultiply = () => {
        setValue(Number(value) * 5);
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
        },
        box: {
            padding: '20px',
            border: '2px solid black',
            borderRadius: '10px',
            backgroundColor: modeType === 'dark' ? '#2e2e2e' : '#fff',
            color: modeType === 'dark' ? '#fff' : '#000',
            textAlign: 'center',
            transition: '0.3s',
        },
        input: {
            padding: '8px',
            marginRight: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: 'red',
            color: '#fff',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h3>{value}</h3>
                <input type="text" placeholder="Enter value" value={value} onChange={(e) => setValue(e.target.value)} style={styles.input} />

                <button onClick={handleMultiply} style={styles.button}> Multiply </button>
            </div>
        </div>
    );
}

export default Explorer;
