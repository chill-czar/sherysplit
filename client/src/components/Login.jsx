import React from "react";
import { NavLink } from "react-router";
const Login = () => {







  
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <form action="" className="flex flex-col gap-2.5 items-center">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          className="input-username px-2.5 py-1 text-xl bg-transparent border-b-2 "
        />
        <button type="submit" className="border-2 w-fit px-1.5 rounded-2xl">
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
