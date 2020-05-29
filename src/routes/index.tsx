import React, { FunctionComponent } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import AboutMePage from './about-me-page';
import ProjectsPage from './projects-page';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route exact path='/about-me' component={AboutMePage} />
    <Route exact path='/projects' component={ProjectsPage} />
    <Route>
      <Redirect to='/about-me' />
    </Route>
  </Switch>
);

export default Routes;
