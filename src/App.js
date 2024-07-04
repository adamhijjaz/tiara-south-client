import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Berita from "./pages/Berita";
import Latar from "./pages/Latar";
import Program from "./pages/Program";
import Aduan from "./pages/Aduan";
import Direktori from "./pages/Direktori";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const { authState, setAuthState } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      email: "",
      id: 0,
      status: false,
    });
    alert("Anda telah berjaya mendaftar keluar.");
    window.location.href = "/Login"; // Redirect to the login page
  };

  const NavItem = ({ text }) => (
    <div className="flex justify-center w-full items-center text-lg hover:bg-slate-300 h-full hover:shadow-md font-semibold text-cyan-950 p-1 px-1.5 rounded-lg">
      <div>{text}</div>
    </div>
  );

  const navLinks = [
    { to: "/Berita", text: "Berita Terkini" },
    { to: "/Latar", text: "Latar Belakang" },
    { to: "/Program", text: "Program" },
    { to: "/Aduan", text: "Ruang Aduan" },
    { to: "/Customersvc", text: "Khidmat Pelanggan" },
  ];

  const NavItems = () => (
    <nav className="sticky top-0 flex self-stretch justify-between h-full gap-5 max-md:flex-wrap max-md:mt-10 ">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={authState.status ? link.to : "/"}
          className="w-full"
        >
          <NavItem text={link.text} />
        </Link>
      ))}
      <Link
        className="w-full h-full"
        to={authState.status ? "/" : "/Login"}
        onClick={() => {
          if (authState.status) {
            logout();
          }
        }}
      >
        <div className="flex items-center justify-between w-full h-full text-lg font-semibold text-white duration-300 rounded-lg hover:bg-slate-950 hover:shadow-md text-nowrap bg-slate-700">
          <div className="mx-auto">{authState.status ? "Log Keluar" : "Log Masuk"}</div>
        </div>
      </Link>
    </nav>
  );

  return (
    <div className="App">
      <Router>
        <div className="relative flex flex-col bg-white ">
          <header className="justify-between w-full p-4 bg-slate-100 max-md:px-5 max-md:max-w-full">
            <div className="flex h-full gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-3 justify-center px-2.5 py-px text-2xl font-semibold text-center whitespace-nowrap text-cyan-950 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be0cf0cc439d7f3e137cba276074492f1d6a29d7859629136bbc029f4e1940c?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                    alt=""
                    className="shrink-0 aspect-square w-[50px]"
                  />
                  <div className="flex-auto my-auto">
                    <Link to="/">TiaraSouth</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full ml-5 max-md:ml-0 max-md:w-full">
                <NavItems />
              </div>
            </div>
          </header>
        </div>

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Login" exact Component={Login} />
          <Route path="/Signup" exact Component={Signup} />
          <Route path="/Berita" exact Component={Berita} />
          <Route path="/Latar" exact Component={Latar} />
          <Route path="/Program" exact Component={Program} />
          <Route path="/Aduan" exact Component={Aduan} />
          <Route path="/Direktori" exact Component={Direktori} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
