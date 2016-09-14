import React, { Component } from 'react';
import { Router } from 'react-router'
import logo from './logo.svg';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
import './App.css';


class App extends Component {
  render() {


    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Router history={history}>
                { routes }
            </Router>        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

  }

}

export default App;
