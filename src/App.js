import React from 'react';
import styled from 'styled-components';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* Chat */}
                <Chat />
              </Route>
            </Switch>
          </AppBody>

        </div>
      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height:100vh;
`;