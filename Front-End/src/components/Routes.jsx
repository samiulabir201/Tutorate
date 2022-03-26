import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Results />
    </Route>
  </Switch>
);
