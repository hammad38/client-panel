import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/client/add" component={AddClient}/>
                <Route exact path="/client/edit/:id" component={EditClient}/>
                <Route exact path="/client/:id" component={DetailClient}/>
                <Route exact path="/auth/login" component={Login}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
