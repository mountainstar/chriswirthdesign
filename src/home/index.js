import React, { Component } from 'react';
import Projects from '../projects';
import bg from '../img/blog.jpg';
import kam from '../img/kamban.png';
import carl from '../img/carl.png';
import feedback from '../img/feedback.png';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {id: 1, name: 'Kamban Demo', url:'http://zonked-page.surge.sh/', image: kam},
                {id: 2, name: 'Carl Borrmann Realtor site', url:'http://test-coloradocarl.tk/', image: carl},
                {id: 3, name: 'BrightIdeas', url:'https://feedback.brightstores.com/', image: feedback}
            ]
        };
    }

    render() {
        const project = this._getProjects();
        const style = {
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: '100%'
        };
        return (
            <div className="container">
                <div className="App-header" style={style}>
                    <h2>Chris Wirth Design</h2>
                </div>
                <div className="wrapper">
                    <section>
                        <div className="row">
                            <h1>Projects</h1>
                            {project}
                        </div>
                    </section>
                </div>
            </div>
        )
    }

    _getProjects() {
        return this.state.projects.map((project) => {
            return (
                <Projects
                    img={project.image}
                    url={project.url}
                    name={project.name}
                    key={project.id} />
            );
        });
    }
}

export default Home;