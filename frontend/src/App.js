import React from 'react';
import IndexAuth from './components/Auth/index';
import UserContextProvider from './context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <Router>
    <UserContextProvider>
      <Switch>
          <Route exact path="/" component={IndexAuth} />
          <Route path="/user" component={UserProfile} />
        </Switch>
    </UserContextProvider>
    </Router>
  );
};

export default App;