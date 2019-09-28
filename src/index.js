import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { PersistGate } from "redux-persist/lib/integration/react";
import createBrowserHistory from "history/createBrowserHistory";
import { persistor, store } from "./configureStore";
import * as serviceWorker from "./serviceWorker";

import AppContainer from "./app/scenes/AppContainer";

import "./app/styles/index.css";

export const history = createBrowserHistory();

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <AppContainer />
      </Router>
    </Provider>
  </PersistGate>,
  document.getElementById("root")
);

serviceWorker.unregister();
