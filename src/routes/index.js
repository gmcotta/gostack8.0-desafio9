import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateEdit from '../pages/CreateEdit';
import Dashboard from '../pages/Dashboard';
import MeetupDetails from '../pages/MeetupDetails';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/details/:id" component={MeetupDetails} />
      <Route path="/createedit/:id" component={CreateEdit} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
