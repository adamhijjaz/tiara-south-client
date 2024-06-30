import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  const NavItem = ({ text }) => (
    <div className="text-lg font-semibold text-cyan-950">{text}</div>
  );

  const NavItems = () => (
    <nav className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:mt-10">
      <Link>
        <NavItem text="Berita Terkini" />
      </Link>
      <Link>
        <NavItem text="Latar Belakang" />
      </Link>
      <Link>
        <NavItem text="Carta Organisasi" />
      </Link>
      <Link>
        <NavItem text="Program" />
      </Link>
      <Link>
        <NavItem text="Ruang Aduan" />
      </Link>
      <Link>
        <NavItem text="Direktori Servis" />
      </Link>
      <Link>
        <NavItem text="Hubungi Kami" />
      </Link>
      <Link to="/Login">
        <NavItem text="Login" />
      </Link>
    </nav>
  );

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/auth", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        // Assuming the backend returns a successful response
        console.log("User is authenticated:", response.data);
        // Proceed with any logic based on authentication status
      } catch (error) {
        // Handle unauthorized or other errors here
        console.error("Authentication error:", error);
        // Redirect user to login or handle authentication failure
      }
    };
  
    // Call the function to check accessToken
    checkAccessToken();
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="flex flex-col bg-white">
          <header className="justify-between p-8 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
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
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
