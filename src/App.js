import React from 'react';
import styled from 'styled-components';
import './App.css';
import Lottie from 'react-lottie'

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

import * as animationData from "./lottie/slack_loading.json"


function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [user, loading] = useAuthState(auth);



  if (loading) {
    return (
      <Loading>
        <Lottie
          options={defaultOptions}
          height={800}
          width={800}
        />
      </Loading>
    )
  }

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

const Loading = styled.div`
  position:relative;
  height:100vh;
  display:grid;
  place-items:center;
`;