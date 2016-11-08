import React, { Component } from 'react';
import bg from '../img/code.png';

class Contact extends Component {
    render(){
        const style = {
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: '100%'
        };
        return (
            <div className="container">
                <div className="App-header" style={style}>
                    <h2>Contact</h2>
                </div>
                <section>

                <div>
                <h1>Chris Wirth</h1>
                    <h4>970.443.4687</h4>
                    <h4><a href="mailto:chriswirthdesign@gmail.com">chriswirthdesign@gmail.com</a></h4>
                </div>
                </section>
            </div>
        )
    }
}

export default Contact