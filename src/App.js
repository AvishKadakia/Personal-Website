import React from "react";

import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import Navbar from "./Components/Navbar/Navbar";
import PageTransition from "./Components/PageTransition/PageTransition";
import Page404 from "./Components/Page404/Page404";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./CSS/common.scss";

function App() {
  return (
    // <div className="App">
    //   <LoginPage></LoginPage>
    // </div>

    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Navbar></Navbar>
      <PageTransition />
      <BrowserRouter>
        <Switch>
          <Route path="/reload" component={null} key="reload" />
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/formdesk" exact>
            <Page404 />
          </Route>
          <Route path="/savrai" exact>
            <Page404 />
          </Route>
          <Route path="/rlagent" exact>
            <Page404 />
          </Route>
          <Route path="/morphlab" exact>
            <Page404 />
          </Route>
          <Route path="/devomark" exact>
            <Page404 />
          </Route>
          <Route path="/error" exact>
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
