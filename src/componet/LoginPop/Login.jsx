import React, { useState, useContext, useEffect } from "react";
import { ContextUser } from "./Context";
import Homee from "./Home";
import Navbar from "./Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(ContextUser);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (!user) {
      const stored = localStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    }
  }, [user, setUser]);

  if (logged) return <Homee />;

  return (
    <>
      <Navbar user={null} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const stored = localStorage.getItem("user");
          const localUser = stored ? JSON.parse(stored) : null;
          setLogged(localUser && localUser.email === email);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button>Login</button>
      </form>
    </>
  );
}
