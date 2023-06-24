import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.components";
import Home from "./components/navbar.components";
import About from "./components/navbar.components";
import Signup from "./components/signup.components";
import Login from "./components/navbar.components";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/About" exact element={About} />
      </Routes>
    </Router>
  );
}

export default App;
