import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import NavBar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <NavBar />

      {/* <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
