import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Product from "./Components/Product";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard>
          <Product />
        </Dashboard>
        <Form />
      </div>
    );
  }
}

export default App;
