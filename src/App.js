import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Berita from "./pages/Berita";
import Latar from "./pages/Latar";
import Program from "./pages/Program";
import Aduan from "./pages/Aduan";
import Carta from "./pages/Carta";
import Direktori from "./pages/Direktori";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const [dropDownOpenSVC, setDropdownOpenSVC] = useState(false);
  const [dropDownOpenLog, setDropdownOpenLog] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);

  // let dropDownOpen = false;
  // const setDropdownOpen = () => {
  //   dropDownOpen = !dropDownOpen;
  // };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      email: "",
      id: 0,
      status: false,
    });
    setDropdownOpenSVC(false);
    alert("Anda telah berjaya mendaftar keluar.");
    window.location.href = "/Login"; // Redirect to the login page
  };

  const NavItem = ({ text }) => (
    <div className="flex justify-center w-full items-center text-lg bg-slate-300 bg-opacity-0 hover:bg-opacity-100 transition-opacity duration-500 h-full hover:shadow-md font-semibold text-cyan-950 p-1 px-1.5 rounded-lg">
      <div>{text}</div>
    </div>
  );

  const navLinks = [
    { to: "/Berita", text: "Berita Terkini" },
    { to: "/Latar", text: "Latar Belakang" },
    { to: "/Carta", text: "Carta Organisasi" },
    { to: "/Program", text: "Program" },
    // { to: "/Aduan", text: "Ruang Aduan" },
    // { to:"", text: "Khidmat Pelanggan" , toPage1:"/Aduan",toPage2:"/Direktori"},
  ];

  const NavItems = ({ dropDownOpen, setDropdownOpen }) => (
    <nav className="flex self-stretch justify-between h-full gap-5 max-md:flex-wrap max-md:mt-10 z-50">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={authState.status ? link.to : "/"}
          onClick={() => {
            setDropdownOpen(false);
          }}
          className="w-full"
        >
          <NavItem text={link.text} />
        </Link>
      ))}
      {/* Added Khidmat pelanggan out from the loop to create dropdown */}
      <Link
        className="w-full relative"
        onClick={() => {
          console.log(dropDownOpen);
          setDropdownOpen(!dropDownOpen);
        }}
      >
        <NavItem text="Khidmat Pelanggan" />
        {dropDownOpen && (
          <div className="absolute top-16 left-0 right-0 w-full bg-[#334155] rounded-lg shadow-lg p-1  duration-300">
            <Link to={authState.status ? "/Aduan" : "/"}>
              <button className="block px-4 py-2 text-white hover:bg-[#8094b0] w-full text-left rounded-lg shadow-lg">
                Ruang Aduan
              </button>
            </Link>
            {/* <Link to={authState.status ? "/hubungi" : "/"}>
              <button className="block px-4 py-2 text-white hover:bg-[#8094b0] w-full text-left rounded-lg shadow-lg">
                Hubungi Kami
              </button>
            </Link> */}
            <Link to={authState.status ? "/Direktori" : "/"}>
              <button className="block px-4 py-2 text-white hover:bg-[#8094b0] w-full text-left rounded-lg shadow-lg">
                Direktori Servis
              </button>
            </Link>
          </div>
        )}
      </Link>

      <Link
        onClick={() => {
          if (authState.status) {
            setDropdownOpenLog(!dropDownOpenLog);
          }
          else{
            window.location.href = "/Login"
          }
        }}
        className="w-full h-full"
      >
        <div className="relative flex items-center justify-between w-full h-full text-lg font-semibold text-white duration-300 rounded-lg hover:bg-slate-950 hover:shadow-md text-nowrap bg-slate-700">
          <div className="mx-auto capitalize">
            {authState.status ? authState.username : "Log Masuk"}
          </div>
          {dropDownOpenLog && (
          <div className=" absolute top-[125%] bg-slate-700 w-full h-full rounded-lg p-1">
            <button
              className=" hover:bg-slate-500 w-full h-full rounded-lg  shadow-xl "
              onClick={() => {
                if (authState.status) {
                  logout();
                }
              }}
            >
              <div className="text-white">Log Keluar</div>
            </button>
          </div>
        )}
        </div>
      </Link>
        
    </nav>
  );

  return (
    <div className="App">
      <Router>
        <div className="flex flex-col bg-white ">
          <header className=" justify-between w-full p-4 bg-slate-100 max-md:px-5 max-md:max-w-full">
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
                <NavItems
                  dropDownOpen={dropDownOpenSVC}
                  setDropdownOpen={setDropdownOpenSVC}
                />
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
          <Route path="/Carta" exact Component={Carta} />
          <Route path="/Direktori" exact Component={Direktori} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
