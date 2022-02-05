import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      <Router>
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
