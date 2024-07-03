import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Berita from "./pages/Berita";
import Latar from "./pages/Latar";
import Program from "./pages/Program";
import Aduan from "./pages/Aduan";
import Direktori from "./pages/Direktori";

function App() {
  const NavItem = ({ text }) => (
    <div className="text-lg hover:bg-slate-300 hover:shadow-md font-semibold text-cyan-950 p-1 px-1.5 rounded-lg">
      {text}
    </div>
  );

  const navLinks = [
    { to: "/Berita", text: "Berita Terkini" },
    { to: "/Latar", text: "Latar Belakang" },
    { to: "/", text: "Carta Organisasi" },
    { to: "/Program", text: "Program" },
    // { to: "/Aduan", text: "Ruang Aduan" },
    // { to: "/Direktori", text: "Direktori Servis" },
    { to: "/Customersvc", text: "Khidmat Pelanggan" },
    { to: "/login", text: "Log Masuk" },
  ];
  
  
  const NavItems = () => (
    <nav className="flex self-stretch justify-between gap-5 my-auto max-md:flex-wrap max-md:mt-10">
      {navLinks.map((link, index) => (
        <Link key={index} to={link.to}>
          <NavItem text={link.text} />
        </Link>
        
      ))}
    </nav>
  );
  

  let accestoken = false;

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/auth", {
          // headers: {
          //   accessToken: localStorage.getItem("accessToken"),
          // },
        });
        console.log("User is authenticated:", response.data);
      } catch (e) {
        // console.error("User is not Authenticated: ", e);
      }
    };

    // Call the function to check accessToken
    // checkAccessToken();
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="flex flex-col bg-white">
          <header className="justify-between w-full p-8 bg-slate-100 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
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
              <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
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
