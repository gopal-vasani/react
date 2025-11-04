import React, { useContext, useEffect } from "react";
import { ContextUser } from "./Context";
import Navbar from "./Navbar";

export default function Homee() {
  const { user, setUser } = useContext(ContextUser);

  useEffect(() => {
    if (!user) {
      const stored = localStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    }
  }, [user, setUser]);

  return (
    <>
      <Navbar user={user} />
      <div>
        <h2>Welcome, {user?.name}!</h2>
        <p>Your email: {user?.email}</p>
      </div>
    </>
  );
}
