import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./routes";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Product from "./Components/Product";

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: "home"
    };
    this.inventory = this.inventory.bind(this);
  }

  homepage = () => {
    this.setState({ page: "home" });
  };
  inventory() {
    this.setState({ page: "inventory" });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/" className="links">
            Inventory
          </Link>
          <Link to="/Dashboard" className="links">
            <button className="Homebtn" onClick={() => props.homepage}>
              <Dashboard />
            </button>
          </Link>
          <Form />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
