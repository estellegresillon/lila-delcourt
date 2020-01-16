import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Header from "./components/header";
import Home from './components/home';
import Project from "./components/project";

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/golden-peaks" component={Project} />
      <Route exact path="/jellove" component={Project} />
      <Route exact path="/razor-edges" component={Project} />
      <Route exact path="/vanity" component={Project} />
      <Route exact path="/volcano" component={Project} />
      <Route exact path="/wild-west" component={Project} />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
