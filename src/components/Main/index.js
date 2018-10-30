import React, { Component } from 'react';
import './App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    );
  }
}

export default Main;
