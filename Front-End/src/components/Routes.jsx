import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Results } from './Results';
import { TutorProfile } from "./TutorProfile";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Results />
    </Route>
      <Route path="/:id">
          <TutorProfile />
      </Route>
  </Switch>
);
