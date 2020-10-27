import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div className = "app__body">
        <BrowserRouter>
        <Switch>
          <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
          </Route>
          <Route path="/">
            <Sidebar />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
      )}
    </div>
  );
}

export default App;
