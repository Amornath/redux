import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <UsersContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
