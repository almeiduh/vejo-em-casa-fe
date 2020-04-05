import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'pages/Landing/Landing';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import TermsConditions from 'pages/TermsConditions';

function App() {
  return (
    <Switch>
      <Route exact component={Landing} path="/" />
      <Route exact component={PrivacyPolicy} path="/politica-privacidade" />
      <Route exact component={TermsConditions} path="/termos-condicoes" />
    </Switch>
  );
}

export default App;
