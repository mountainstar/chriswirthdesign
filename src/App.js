import React, { Component } from 'react';
import { Router } from 'react-router'
import routes from './routes';
import logo from './cwd_logo.png';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
import './main.css';


class App extends Component {
  render() {


    return (

        <div className="App">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Router history={history}>
            { routes }
          </Router>
          <p className="App-intro">

          </p>
        </div>
    );

  }

}

export default App;
