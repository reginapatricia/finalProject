import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './pages';


const App = () => {
  return (
    <Router>
      <div>
        <h1>Covid-19 Tracker</h1>
      <nav>
          <ul>
            <li>
              
              <Link to="/global">Global</Link>
             
            </li>

            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>

            <li>
              <Link to="/provinsi">Provinsi</Link>
            </li>
          </ul>
        </nav>
      

      <Switch>
        <Route path ="/global">
          <Global/>
        </Route>
        <Route path ="/indonesia">
          <Indonesia/>
        </Route>
        <Route path ="/provinsi">
          <Provinsi/>
        </Route>
      </Switch>

      </div>
    </Router>
  );
};

export default App;
