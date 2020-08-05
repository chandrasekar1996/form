import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

// Application Components.
import SignIn from '../signin/signin';

const Routes = () => {
  return (
    <Router history={useHistory}>
      <Switch>
        <Route exact path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
