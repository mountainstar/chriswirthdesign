import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import Home from './home'
import About from './about'
import Work from './work'
import Contact from './contact'
import NoMatch from './nomatch'
// Main component
class App extends Component {
    componentDidMount(){
        document.body.className=''
    }
    render(){
        return (
            <div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
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
        <Route path="work" component={Work}/>
        <Route path="contact" component={Contact}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)