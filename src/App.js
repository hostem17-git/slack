import React from 'react';
import styled from 'styled-components';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';


function App() {

  const [user, loading] = useAuthState(auth);


  return (
    <div className="App">

      <Router>
        {
          !user ?
            <Login /> :

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

        }



      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height:100vh;
`;