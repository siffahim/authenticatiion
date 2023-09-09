import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const { error, register } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    const newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData.email, userData.password, userData.name);
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
          {error && <p className="text-red-500">{error}</p>}
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

export default SignUp;
