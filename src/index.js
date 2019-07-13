import React from 'react';
import { render } from 'react-dom';
import CSS from './index.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './components/app.js';
import Library from './components/library.js';

const Notfound = () => <h1>not found</h1>
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">dmac</Link>
        </li>
        <li>
          <Link to="/library">library</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/library" component={Library} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
render(routing, document.querySelector('#root'))