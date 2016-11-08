import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import Home from './home'
import About from './about'
import Contact from './contact'
import NoMatch from './nomatch'
import logo from './cwd_logo.png';
// Main component
class App extends Component {
    componentDidMount(){
        document.body.className=''
    }
    render(){
        return (
            <div>

                <nav>
                    <Link to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                { this.props.children }
            </div>
        )
    }
}


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)