import React from 'react';
import './App.css';
import ForecastWeek from './ForecastWeek/ForecastWeek';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <ForecastWeek />
            </div>
        );
    }

}

export default App;
