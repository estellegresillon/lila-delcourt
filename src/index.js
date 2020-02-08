import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import Header from "./components/common/header";
import Home from './components/home';
import Grid from './components/common/grid';
import Contact from "./components/contact";
import Project from "./components/project";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Grid />
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/wild-west" component={Project} />
      <Route exact path="/aerials" component={Project} />
      <Route exact path="/portraits" component={Project} />
      <Route exact path="/homeland" component={Project} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
