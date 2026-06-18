import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllProjects from "./containers/AllProjects/AllProjects";
import AllCertifications from "./containers/AllCertifications/AllCertifications";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/certifications" component={AllCertifications} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
