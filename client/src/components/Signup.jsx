import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import axios from "axios"

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({...prev , [name] : value} ))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/createuser", formData)
      console.log("Server Response:" , response.data)
    } catch (error) {
      console.error(error)
    }
}

  return (
    <>
      <div className="h-screen flex flex-col gap-3 items-center justify-center">
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2.5 items-center">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
          />
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="username"
            className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
          />
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="password"
            className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
          />
          <button type="submit" className="border-2 w-fit px-1.5 rounded-2xl">
            Signup
          </button>
        </form>
        <NavLink to="/login" className="underline">
          Already Have a Account? Login
        </NavLink>
      </div>
    </>
  );
};

export default Signup;
