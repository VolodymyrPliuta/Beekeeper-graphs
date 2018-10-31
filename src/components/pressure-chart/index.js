import React, { Component } from 'react';
import Chart from "react-google-charts";

class Pressure extends Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={this.props.data}
        />
      </div>
    );
  }
}

export default Pressure;
