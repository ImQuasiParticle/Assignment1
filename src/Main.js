import React from "react";
import DivBy5 from "./components/DivBy5";
import DivBy3 from "./components/DivBy3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import All from "./components/All";
import DivBy2 from "./components/DivBy2";

function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <All />
          </Route>
          <Route path="/divby2" exact>
            <DivBy2 />
          </Route>
          <Route path="/divby3" exact>
            <DivBy3 />
          </Route>
          <Route path="/divby5" exact>
            <DivBy5 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
