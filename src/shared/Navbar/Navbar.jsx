import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  return (
    <div className="navbar bg-violet-500 px-6">
      <div className="flex-1">
        <a className="text-xl text-white">Authentication</a>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-link text-white no-underline">
          Home
        </Link>
        <Link to="/products" className="btn btn-link text-white no-underline">
          Products
        </Link>
        <Link to="/dashboard" className="btn btn-link text-white no-underline">
          Dashboard
        </Link>
        {user.displayName ? (
          <button
            className="btn btn-link no-underline text-white"
            onClick={logOutUser}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/sign-in" className="btn btn-link text-white no-underline">
            Sign In
          </Link>
        )}
        {user && (
          <p
            className="mr-4 text-pink-800 font-medium"
            style={{ userSelect: "none" }}
          >
            {user.displayName}
          </p>
        )}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/86902893?v=4" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
