import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");  
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
        
        <h1 className="text-[#2C415A] font-bold text-4xl mb-3">Welcome Back</h1>

        <p className="text-[#2C415A] text-lg text-center mb-6">
          Please enter your login details to continue.
        </p>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input type="email" placeholder="Email Address" className="p-3 border rounded-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="password" placeholder="Password" className="p-3 border rounded-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="bg-[#2C415A] text-white py-3 rounded-full font-semibold">Sign In</button>
        </form>

        <p className="mt-4 text-sm">
          Don't Have An Account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Create Account</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
