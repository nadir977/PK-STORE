import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
        <h1 className="text-[#2C415A] font-bold text-4xl mb-3">
          Register Yourself
        </h1>

        <p className="text-[#2C415A] text-lg text-center mb-6">
          Please enter your email and password to <br /> register your account.
        </p>

        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-full outline-none "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-full outline-none "
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-full outline-none "
          />

          <button
            type="submit"
            className="bg-[#2C415A] text-white py-3 rounded-full font-semibold hover:bg-[#1e2d42] transition cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already Have An Account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
