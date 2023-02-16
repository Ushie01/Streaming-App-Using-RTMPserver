import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../actions";
import { useState } from "react";
import searchIcon from "./assets/searchIcon.png";
import Stream from "./assets/stream.png";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";

const Header = ({ user }) => {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  const onHandleLight = () => {
    setShow((current) => !current);
    if (localStorage.getItem("color-theme")) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  const onSearch = () => {
    setSearch((current) => !current);
  };

  const navToggle = (event) => {
    setMenu((current) => !current);
    event.currentTarget.classList.toggle("open");
  };

  return (
    <>
      <nav className="p-3 w-auto border-gray-900 bg-black mt-6 rounded hidden md:block">
        <div className="flex items-center justify-between space-x-20 my-1">
          {/* Logo */}
          <div className="flex flex-row items-center justify-center space-x-2 ">
            <img
              src={Stream}
              alt={Stream}
              className="h-12 w-12 animate-bounce"
            />
            <p className="text-2xl text-white">LifeStream</p>
          </div>
          {/* Menu Items */}
          <div
            className="flex flex-row items-center space-x-8 justify-center 
        text-gray-400 font-sans font-bold text-xl"
          >
            <div>
              <Link to="/" className="hover:text-white">
                Profile
              </Link>
              <div className="hover:border-white hover:border"></div>
            </div>
            <Link to="/" className="hover:text-white">
              Streaming
            </Link>
            <Link to="/" className="hover:text-white">
              Series
            </Link>
            <Link to="/" className="hover:text-white">
              Recently Added
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center space-x-6">
            {user ? (
              <Link
                to="/"
                className="text-md font-sans text-white font-extrabold hover:text-white"
              >
                {`Hi, ${user}`}
              </Link>
            ) : (
              ""
            )}
            <Link to="/">
              <img src={searchIcon} alt={searchIcon} className="w-8 h-8" />
            </Link>
            {user ? (
              <Link
                to="/"
                className="px-8 py-2 ring-offset-2 ring ease-in duration-300 text-white font-bold hover:font-bold
             bg-pink-800 border-pink-600 rounded-lg shadow-md hover:text-pink-400 hover:bg-white"
              >
                Sign-Out
              </Link>
            ) : (
              <Link
                to="/sign-up"
                className="px-8 py-2 ring-offset-2 ring ease-in duration-300 text-white 
                font-bold hover:font-bold bg-pink-800 border-pink-600 rounded-lg
                shadow-md hover:text-pink-400 hover:bg-white"
              >
                Login
              </Link>
            )}
            <button
              id="theme-toggle"
              onClick={() => setIsActive()}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
            focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg 
            text-sm p-1"
            >
              {isActive ? (
                localStorage.getItem("color-theme") === "dark" ||
                (!("color-theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <img
                    src={show ? moon : sun}
                    alt={show ? moon : sun}
                    id="theme-toggle-sun"
                    className={`w-9 h-9 p-1 rounded-sm`}
                    onClick={onHandleLight}
                  />
                ) : (
                  <img
                    src={show ? sun : moon}
                    alt={show ? sun : moon}
                    id="theme-toggle-sun"
                    className={`w-9 h-9 p-1 rounded-sm`}
                    onClick={onHandleLight}
                  />
                )
              ) : (
                <img
                  src={show ? moon : sun}
                  alt={show ? moon : sun}
                  id="theme-toggle-sun"
                  className={`w-9 h-9 p-1 rounded-sm`}
                  onClick={onHandleLight}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <div className="p-3 bg-black rounded-t-sm w-auto block md:hidden rounded-md">
        <div
          className={
            user
              ? `flex flex-row items-center justify-center space-x-24 mx-auto rounded-sm`
              : `flex flex-row items-center justify-center space-x-32 mx-auto rounded-sm`
          }
        >
          {/* Hamburger menu */}
          <div className="flex flex-row items-center justify-center space-x-3">
            <img
              src={searchIcon}
              alt={searchIcon}
              className="h-5 w-5"
              onClick={onSearch}
            />
            <button
              id="theme-toggle"
              onClick={() => setIsActive()}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
            focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg 
            text-sm"
            >
              {isActive ? (
                localStorage.getItem("color-theme") === "dark" ||
                (!("color-theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <img
                    src={show ? moon : sun}
                    alt={show ? moon : sun}
                    id="theme-toggle-sun"
                    className={`w-7 h-7 p-1 rounded-sm`}
                    onClick={onHandleLight}
                  />
                ) : (
                  <img
                    src={show ? sun : moon}
                    alt={show ? sun : moon}
                    id="theme-toggle-sun"
                    className={`w-7 h-7 p-1 rounded-sm`}
                    onClick={onHandleLight}
                  />
                )
              ) : (
                <img
                  src={show ? moon : sun}
                  alt={show ? moon : sun}
                  id="theme-toggle-sun"
                  className={`w-7 h-7 p-1 rounded-sm`}
                  onClick={onHandleLight}
                />
              )}
            </button>
          </div>
          <Link to="/">
            <img src={Stream} alt={Stream} className="h-12 w-16" />
          </Link>

          {/* NavToggle  */}
          <div className="flex flex-row space-x-1 items-center justify-center">
            {user ? (
              <Link
                to="/"
                className="text-md font-sans text-white font-extrabold hover:text-white"
              >
                {`Hi, ${user}`}
              </Link>
            ) : (
              ""
            )}
            <button
              id="menu-btn"
              className="z-30 block focus:outline-none hamburger"
              onClick={navToggle}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          {menu ? (
            <div
              id="menu"
              className="fixed w-auto inset-0 flex flex-col items-center self-end px-6 py-1 pt-24 pb-4 
           text-white uppercase divide-y tracking-widest divide-gray-500 opacity-90
           bg-blue-900 z-20"
            >
              <Link to="/">
                <img src={Stream} alt={Stream} className="h-12 w-16 -mt-20" />
              </Link>

              <div className="w-full py-3 text-center mt-20">
                <Link to="/" className="block hover:text-red-500">
                  Profile
                </Link>
              </div>

              <div className="w-full py-3 text-center">
                <Link to="/streams/new" className="block hover:text-red-500">
                  Create Stream
                </Link>
              </div>

              <div className="w-full py-3 text-center">
                <Link to="/" className="block hover:text-red-500">
                  Streaminig
                </Link>
              </div>

              <div className="w-full py-3 text-center">
                <Link to="/" className="block hover:text-red-500">
                  Series
                </Link>
              </div>

              <div className="w-full py-3 text-center">
                <Link to="/" className="block hover:text-red-500">
                  Recently Added
                </Link>
              </div>

              <div className="w-full py-3 text-center">
                {user ? (
                  <Link to="/sign-up" className="block hover:text-red-500">
                    Sign-Out
                  </Link>
                ) : (
                  <Link to="/sign-up" className="block hover:text-red-500">
                    Login
                  </Link>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {search ? (
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="font-sans text-xl h-10 w-96 border-b-2 mt-1"
        ></input>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user?.userName };
};

export default connect(mapStateToProps, { signIn })(Header);
