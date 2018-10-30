import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => {
            return <Home title="hhh" />;
          }} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
