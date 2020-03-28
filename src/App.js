import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'pages/Landing/Landing';

function App() {
  return (
    <Switch>
      <Route exact component={Landing} path="/" />
    </Switch>
  );
}

export default App;
