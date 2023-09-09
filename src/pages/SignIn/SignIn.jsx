import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { error, signIn, signInUserWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signIn(email, password, navigate, location);
  };

  const handleGoogleSingIn = () => {
    signInUserWithGoogle();
  };
  return (
    <>
      <div className="text-center mt-10 bg-violet-50 p-16  m-20 mx-40 rounded-lg">
        <h1 className="text-2xl mb-10 text-violet-500 font-medium">Login</h1>
        <form className="space-y-5" onSubmit={handleOnSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary  w-2/4"
            ref={emailRef}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered input-primary w-2/4"
            ref={passwordRef}
          />
          {error && <p className="text-red-500">{error}</p>}
          <p>
            I haven't an account{" "}
            <Link to="/sign-up" className="text-violet-500">
              Register
            </Link>
          </p>

          <button
            type="submit"
            className="btn bg-violet-500 text-white w-2/4 hover:bg-slate-400"
          >
            Login
          </button>
        </form>
        <div className="mt-8">
          <button
            onClick={handleGoogleSingIn}
            className="btn bg-red-500 mr-2 text-white w-1/4  hover:bg-slate-400"
          >
            Google
          </button>
          <button className="btn bg-black text-white w-1/4 hover:bg-slate-400">
            Github
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
