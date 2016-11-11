import React, { Component } from 'react';
import jQuery from 'jquery';
import Projects from '../projects';
import bg from '../img/blog.jpg';


export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            projects: []
        };
    }
    componentWillMount(){
        this._fetchProjects();
    }

    render() {
        const projects = this._getProjects();
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
                            {projects}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    _getProjects() {
        return this.state.projects.map((project) => {
            return <Projects
                    id={project.id}
                    image={project.image}
                    url={project.url}
                    name={project.name}
                    key={project.id} />
        });
    }
    _fetchProjects() {
        jQuery.ajax({
            method: 'GET',
            url: 'projects.json',
            success: (projects) => {
                this.setState({ projects })
            }
        });
    }
}

