// import axios from "axios";
import axios from "../utils/axios";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username , password} = e.target;
    console.log(username.value, password.value);
    
    try {
      const res = await axios.post('/login', {
        username: username.value,
        password: password.value
      })

      console.log(res)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <form
        action=""
        onSubmit={(e)=> handleSubmit(e)}
        className="flex flex-col gap-2.5 items-center"
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
          onChange={handleChange}
          className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
          className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="border-2 w-fit px-1.5 rounded-2xl"
        >
          Login
        </button>
      </form>
      <NavLink to="/signup" className="underline">
        Create new Account
      </NavLink>
      {/* <h1 className='underline'>Create new Account</h1> */}
    </div>
  );
};

export default Login;
