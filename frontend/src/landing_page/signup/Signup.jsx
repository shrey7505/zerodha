import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      return alert("All fields are required");
    }

    try {
      const signupRes = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const signupData = await signupRes.json();

      if (signupData.success) {
        const loginRes = await fetch("http://localhost:3002/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            username: form.username,
            password: form.password,
          }),
        });

        const loginData = await loginRes.json();

        if (loginData.success) {
          alert("Signup & Login successful!");
          navigate("/"); // redirect after login
        } else {
          alert("Signup successful, but login failed");
        }
      } else {
        alert(`Signup failed: ${signupData.message}`);
      }
    } catch (error) {
      alert("Network error. Please try again.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Signup & Login</button>
    </form>
  );
};
