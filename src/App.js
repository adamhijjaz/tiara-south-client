import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Login"> Login </Link>
        <Link to="/"> Back </Link>

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Login" exact Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
