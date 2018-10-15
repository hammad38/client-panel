import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserIsAuthenticated} from './helpers/auth';
import {UserIsNotAuthenticated} from './helpers/auth';
import './App.scss';

import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import DetailClient from "./components/clients/DetailClient";
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)}/>
                <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)}/>
                <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}/>
                <Route exact path="/client/:id" component={UserIsAuthenticated(DetailClient)}/>
                <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
