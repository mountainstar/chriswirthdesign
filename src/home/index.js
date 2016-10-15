import React, { Component } from 'react';
import bg from '../img/blog.jpg';

class Home extends Component {


    render(){
        const style = {
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: '100%'
                };
        return (
            <div className="container">
                <div className="App-header" style={style}>
                    <h2>Home</h2>
                </div>
                <section>

                    <div>Some home page content</div>
                </section>

            </div>
        )
    }
}

export default Home;