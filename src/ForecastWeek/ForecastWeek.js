import React, { Component } from 'react';
import './ForecastWeek.css'
import Forecast1Day from '../Forecast1Day/Forecast1Day';

class ForecastWeek extends Component {

    constructor(props) {
        super(props);
        this.state={
            forecastData: []
        }
        
    }

    componentDidMount () {
        fetch ('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
            .then (data => data.json())
            .then (forecastData => {
                this.setState ({forecastData})
            });
    }
    

    render() {
        return (
            <div className="ForecastWeek">
                <h1>Five days forecast</h1>
                {this.state.forecastData.map(OneDayForecast =>{
                    return (<Forecast1Day key={OneDayForecast.day}
                                        day={OneDayForecast.day}
                                        temperature={OneDayForecast.temperature}
                                        icon={OneDayForecast.icon}
                                        description={OneDayForecast.description}
                    />);
                })}
            </div>
        );
    }
}

export default ForecastWeek;