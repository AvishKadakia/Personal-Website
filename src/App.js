import React, { Suspense, lazy } from "react";

//import HomePage from "./Components/HomePage/HomePage";
// import AboutPage from "./Components/AboutPage/AboutPage";
// import ContactPage from "./Components/ContactPage/ContactPage";
// import Navbar from "./Components/Navbar/Navbar";
// import PageTransition from "./Components/PageTransition/PageTransition";
// import Page404 from "./Components/Page404/Page404";
// import Morphlab from "./Components/Morphlab/Morphlab";
// import FormDesk from "./Components/FormDesk/FormDesk";
// import Devomark from "./Components/Devomark/Devomark";
import Loading from "./Components/Loading/Loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./CSS/common.scss";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const AboutPage = lazy(() => import("./Components/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./Components/ContactPage/ContactPage"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const PageTransition = lazy(() =>
  import("./Components/PageTransition/PageTransition")
);
const Page404 = lazy(() => import("./Components/Page404/Page404"));
const Morphlab = lazy(() => import("./Components/Morphlab/Morphlab"));
const FormDesk = lazy(() => import("./Components/FormDesk/FormDesk"));
const Devomark = lazy(() => import("./Components/Devomark/Devomark"));
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function App() {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      {/* <Loading></Loading> */}

      <BrowserRouter>
        <Suspense
          fallback={
            getCookie("loadedOnce") !== "True" ? (
              <Loading layout="1" />
            ) : (
              null
            )
          }
        >
          {console.log()}
          {getCookie("loadedOnce") !== "True" ? <Loading layout="1" /> : null}

          <Navbar />
          {getCookie("loadedOnce") !== "True" ? <PageTransition /> : null}
          
          <Switch>
            <Route path="/" exact>
              <HomePage index/>
              <Route path="*" >
              <Page404 message="Page Not Found"/>
              </Route>
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/formdesk" exact>
              <FormDesk />
            </Route>
            <Route path="/savrai" exact>
              <Page404 message="Coming Soon"/>
            </Route>
            <Route path="/rlagent" exact>
              <Page404 message="Coming Soon"/>
            </Route>
            <Route path="/morphlab" exact>
              <Morphlab />
            </Route>
            <Route path="/devomark" exact>
              <Devomark />
            </Route>
            
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
