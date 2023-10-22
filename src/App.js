import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
