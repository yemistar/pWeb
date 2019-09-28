import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router";

import Landing from "./Landing";

export default class AppContainer extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </>
    );
  }
}
