import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import NoMatch from "../components/Error";

export default () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
);
