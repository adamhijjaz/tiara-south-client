import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      try {
        console.log("Response: ", response.data);
     } catch (error) {
        console.log("Hello"+error);
     }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to="/Login"> Login </Link>
        <Link to="/"> Back </Link>

        <Routes>
          <Route path="/posts" exact Component={Home} />
          <Route path="/Login" exact Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
