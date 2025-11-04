import React, { useState, useEffect } from "react";
import { ContextUser } from "./Context";
import Login from "./Login";
import Navbar from "./Navbar";

export default function Sign() {
  const [user, setUser] = useState();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (showLogin) {
    return (
      <ContextUser.Provider value={{ user, setUser }}>
        <Login />
      </ContextUser.Provider>
    );
  }

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      <Navbar user={null} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
          };
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          setShowLogin(true);
        }}
      >
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <button>Signup</button>
      </form>
    </ContextUser.Provider>
  );
}
