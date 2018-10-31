import React, { Component } from 'react';
import './App.css';
import Main from './components/main-chart'
import Pressure from './components/pressure-chart'

const data = [
  ["Date", "weight", "temperature", "humidity", "pressure kPa"],
  ["2018/10 23:12", 25, 10, 40, 100],
  ["2018/11 21:12", 28, 14, 42, 101],
  ["2018/12 20:15", 29, 15, 35, 103],
  ["2018/13 18:05", 30, 16, 50, 104],
  ["2018/14 16:12", 34, 17, 32, 99]
];

let mainChartData = [];
let pressureChartData = [];


let streamer = data.map((obj, index) => {
  if (index === 0) {
    mainChartData.push(["Date", "weight", "temperature", "humidity"]);
    pressureChartData.push(["Date", "weight", "temperature", "humidity"]);
  }
    mainChartData[index] = ([obj[0], obj[1], obj[2], obj[3]]);
    pressureChartData[index] = ([obj[0], obj[4]])

});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main data={mainChartData} />
        <Pressure data={pressureChartData} />
      </div>
    );
  }
}

export default App;
