import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "pages/Home/Home";

function App() {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
    </Switch>
  );
}

export default App;
