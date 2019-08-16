import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
//import Footer from "./components/Footer";

import Home from "./components/Home";
import Ronnie from "./components/Ronnie";
import Sophie from "./components/Sophie";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/Home" />
          <Route path="/Home" component={Home} />
          <Route path="/Ronnie" component={Ronnie} />
          <Route path="/Sophie" component={Sophie} />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
