import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './layout/mainlayout/mainlayout';

import Home from './pages/homepage/homepage';
import Seats from './pages/seats/seats';
import Summary from './pages/summary/summary';
import NotFound from './pages/notfound/notfound';

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/seats" exact component={Seats} />
            <Route path="/summary" exact component={Summary} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MainLayout>
    );
  }
}

export default App;
