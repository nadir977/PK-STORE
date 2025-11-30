import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">

        <h1 className="text-[#2C415A] font-bold text-4xl mb-3">Register Yourself</h1>

        <form onSubmit={handleSignup} className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded-full outline-none"
            onChange={(e) => setName(e.target.value)}
          />

          <input type="email" placeholder="Email Address" className="p-3 border rounded-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="password" placeholder="Password" className="p-3 border rounded-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="bg-[#2C415A] text-white py-3 rounded-full font-semibold">
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already Have An Account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">Sign In</Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
