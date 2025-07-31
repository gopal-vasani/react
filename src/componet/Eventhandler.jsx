import React, { useRef, useState } from "react";

const Eventhandler = () => {
    const [text, setText] = useState("");
    const [second, setSecond] = useState(0);
    const [res, setRes] = useState(false);
    const [disable, setDisable] = useState(false);
    const timer = useRef(null);

    const handlesubmit = (e) => {
        setText(e.target.value);
        if (!timer.current) {
            timer.current = setInterval(() => {
                setSecond((prev) => prev + 1);
            }, 1000);
        }
    };

    const add = () => {
        setRes(true);
        setDisable(true);
        clearInterval(timer.current);
        timer.current = null;

        setTimeout(() => {
            setText("");
            setSecond(0);
            setRes(false);
            setDisable(false);
        }, 9000);
    };

    return (
        <div className="text-center mt-5">
            <h2 className="mb-4">Typing Speed Tracker</h2>

            <textarea
                placeholder="Start typing..."
                value={text}
                onChange={handlesubmit}
                className="p-3"
                style={{ width: "400px", height: "200px", fontSize: "16px" }}
            />

            <br />

            <button
                onClick={add}
                disabled={disable}
                className="btn btn-success mt-3 px-4 fs-5"
            >
                Submit
            </button>

            {res && (
                <div
                    className="mt-4 d-inline-block text-start p-3 border rounded"
                    style={{ backgroundColor: "#f9f9f9", minWidth: "300px" }}
                >
                    <h5>Time Elapsed: {second} seconds</h5>
                    <h5>Characters Typed: {text.length}</h5>
                </div>
            )}
        </div>
    );
};

export default Eventhandler;
