
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-white px-6 select-none">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6 select-none">
          Welcome Back
        </h2>
        <form className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 select-text"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 select-text"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 select-none"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600 select-none">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline select-text">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
