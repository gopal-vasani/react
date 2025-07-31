import React, { useRef } from 'react';

export const Formval = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const errorRef = useRef(null);
    const successRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        // Clear previous messages
        errorRef.current.innerText = '';
        successRef.current.innerText = '';

        // Basic form validation
        if (!name || !email || !password) {
            errorRef.current.innerText = 'Please fill in all fields.';
            return;
        }

        // Email validation
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            errorRef.current.innerText = 'Please enter a valid email address.';
            return;
        }

        // All validations passed
        successRef.current.innerText = 'Success! Form submitted.';
    };

    return (
        <div style={{
            textAlign : 'center',
            margin : '200px',
        }}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ref={nameRef} placeholder="Name" /> <br />
                <input type="email" name="email" ref={emailRef} placeholder="Email" /><br />
                <input type="password" name="password" ref={passwordRef} placeholder="Password" /><br />
                <button type="submit">Submit</button>
            </form>
            <p ref={errorRef} style={{ color: 'red' }}></p>
            <p ref={successRef} style={{ color: 'green' }}></p>
        </div>
    );
};
