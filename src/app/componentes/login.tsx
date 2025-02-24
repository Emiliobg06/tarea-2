"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ya jalo");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>Sign Up</h1>
        </div>
        <div className="body">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Login;