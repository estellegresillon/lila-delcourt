import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Header from "./components/header";
import Home from './components/home';
// import Project from "./components/project";

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
