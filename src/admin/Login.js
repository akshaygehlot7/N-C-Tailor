import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("admin", true);
      window.location = "/dashboard";
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
