import React, { Component } from 'react' ;
import bg from '../img/key-tech-default.jpg';
import Fetch from 'react-fetch';

class About extends Component {

    render() {

        const style = {
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: '100%'
        };
        const URL = `https://api.github.com/users/mountainstar`;

        return (

            <div className="container">
                <div className="App-header" style={style}>
                    <h2>About</h2>
                </div>
                <section>
                    <Fetch url={URL}>
                        <TestComponent />
                    </Fetch>

                </section>
            </div>
        )
    }
}
class TestComponent extends Component{
    render() {
        return (
            <div>
                <h1><a href={this.props.html_url} target="_blank">{this.props.name}</a></h1>
                <img role="presentation" src={this.props.avatar_url} />
                <p>Number of Repos: {this.props.public_repos}</p>
            </div>
        );
    }
};


export default About