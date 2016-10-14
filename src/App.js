import React, { Component } from 'react';
import { Router } from 'react-router'
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
import './main.css';


class App extends Component {
  render() {
    return (

        <div className="App">
          <main>
            <Router history={history}>
              { routes }
            </Router>
            <p className="App-intro">
            </p>
          </main>


        </div>
    );

  }

}

export default App;
