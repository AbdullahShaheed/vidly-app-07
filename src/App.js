import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/not-found";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar></NavBar>
        </header>

        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>

            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
