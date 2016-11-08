import React, { Component } from 'react';
class Projects extends Component {
    render(){
        return(


                <div className="col">
                    <div className="box">
                        <a href={this.props.url} target="_blank" >
                        <img role="presentation" width="300px" src={this.props.img} /><br/>
                       {this.props.name}</a>
                    </div>
                </div>


        )
    }
}

export default Projects;