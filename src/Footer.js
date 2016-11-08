import React, { Component } from 'react';
import './main.css';

class Footer extends Component {

    render() {
        const date = new Date();
        const year = date.getFullYear();

        return (
                <footer>
                    <div className="left-content">&copy; ChrisWirthDesign {year}</div>
                    <div className="social">
                        <a href="http://facebook.com" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="http://twitter.com" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a href="https://github.com/mountainstar" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                    </div>
                </footer>
        );

    }

}

export default Footer;
