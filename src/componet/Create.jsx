import React, { useState } from "react";


function Create() {
    const [isLogin, setIsLogin] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);

    const login = () => {
        setIsLogin(!isLogin);
    };

    const togglePassword = () => {
        setShowPass(!showPass);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "What is a component?",
            answer: "A component is a reusable piece of UI in React."
        },
        {
            question: "What is useState?",
            answer: "useState is a React hook used to manage state in functional components."
        }
    ];
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Login & Logout</h1>
            <h4>{isLogin ? 'Welcome to Home page' : 'Please Login!!'}</h4>


            {/* Login/Logout button */}
            <button onClick={login}>
                {isLogin ? 'Logout' : 'Login'}
            </button><br /><br />
           


            {/* Password input and toggle button */}
            <div>
                <h1>Show Password</h1>
                Enter Password:{" "}
                <input
                    type={showPass ? "text" : "password"}
                    id="password"
                />
                <button onClick={togglePassword}>
                    {showPass ? 'Hide' : 'Show'}
                </button><br />

            </div><br />
           

            {/* Expand/Collapse toggle */}
            <button onClick={toggleExpand}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>

            {isExpanded && (
                <div style={{ marginTop: '20px', background: '#f3f3f3', padding: '10px' }}>
                    <p>This is the expanded content. You can place anything here like text, form, or images.</p>
                    <img src="https://cdn.prod.website-files.com/5eb2c3584e1741ad905322a5/670fec254c97d8ebfad48c16_indian-army-35e82zy24xfm0pgi.jpg" alt="" />
                </div>
            )}

            <br />
     

            <div style={{ width: '600px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '15px' }}>
                        <div
                            onClick={() => toggleFAQ(index)}
                            style={{
                                cursor: 'pointer',
                                background: '#eee',
                                padding: '10px',
                                borderRadius: '8px',
                                fontWeight: 'bold'
                            }}
                        >
                            {faq.question}
                        </div>
                        {openIndex === index && (
                            <div>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    );
}


export default Create;
