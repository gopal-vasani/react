import React, { useState, useEffect } from "react";

function DarkMode() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#f9f9f9';
  }, [theme]);

  const themeBoxStyle = {
    backgroundColor: theme === 'dark' ? '#1e1e2f' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#111111',
    padding: '40px',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: theme === 'dark' ? '#fff' : '#333',
    color: theme === 'dark' ? '#000' : '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Theme Switcher App</h1>

      <button onClick={toggleTheme} style={buttonStyle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <div style={{ ...themeBoxStyle, marginTop: '30px' }}>
        <h2>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</h2>
        <p>This is a clean and simple theme box using useState and useEffect.</p>
      </div>
    </div>
  );
}

export default DarkMode;
