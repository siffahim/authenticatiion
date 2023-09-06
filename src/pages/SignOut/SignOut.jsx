import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignOut = () => {
  const [userData, setUserData] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <div className="text-center  bg-violet-50 p-16  m-20 mt-10 mx-40 rounded-lg">
        <h1 className="text-2xl mb-10 text-violet-500 font-medium">Sing Up</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered input-primary w-2/4"
            onBlur={handleInput}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary w-2/4"
            onBlur={handleInput}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered input-primary w-2/4"
            onBlur={handleInput}
          />
          <br />
          <input
            type="password"
            name="rePassword"
            placeholder="Enter your re-password"
            className="input input-bordered input-primary w-2/4"
            onBlur={handleInput}
          />
          <p>
            I haven an account{" "}
            <Link to="/sign-in" className="text-violet-500">
              Login
            </Link>
          </p>
          <br />
          <button type="submit" className="btn bg-violet-500 text-white w-2/4">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SignOut;
