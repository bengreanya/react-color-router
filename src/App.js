import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/display/Nav.js';
import RGB from './components/display/RGB.js';
import NotFound from './components/NotFound.js';
function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/:red/:green/:blue" component={RGB} />
        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
