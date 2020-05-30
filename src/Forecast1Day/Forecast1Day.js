import React, { Component } from 'react';
import './Forecast1Day.css'

class Forecast1Day extends Component {
//
    render() {
        return (
            <div className="Forecast1Day">
                <h2>{this.props.day}</h2>
                <img src={require(`../icons/${this.props.icon}.png`)} alt="1" />
                <p><span>{this.props.temperature}&#176;</span>{this.props.description}</p>
            </div>
        );
    }
}

export default Forecast1Day;