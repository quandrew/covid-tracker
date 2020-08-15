import React from 'react';
import {Line} from 'react-chartjs-2';
import './Data.css';

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.createDataSet = this.createDataSet.bind(this);
    this.state = {
      globalHistory: [],
      globalData: {}
    };
  }

  render() {
    return <div className="Data">
      <header className="Data-header">
        <h2>Data</h2>
      </header>
      <div>
        <Line
          data={this.state.globalData}
          options={{
            title:{
              display:true,
              text:'Global Cases',
              fontSize:30,
              fontColor:'#ffffff'
            },
            legend:{
              display:true,
              position:'right'
            },
            animations:{
              easing:'easeInQuart'
            },
            tooltips: {
              displayColors: false
            }
          }}
        />
        {console.log(this.state.globalHistory)}
      </div>
    </div>;
  }

  createDataSet(globalData) {
    let globData = {
      labels: globalData.map(x => x.date.substring(0, 10)),
      datasets: [
        {
          label: 'Deaths',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(153,15,15,1)',
          borderColor: 'rgba(153,15,15,1)',
          borderWidth: 4,
          pointRadius: 6,
          pointHoverBorderWidth: 4,
          pointHoverRadius: 12,
          data: globalData.map(x => x.deaths)
        }
      ]
    };
    this.setState({'globalData': globData});
  }

  componentDidMount() {
    const that = this;
    let historyLength = 29;
    var myHeaders = new Headers();
    myHeaders.append("Subscription-Key", "3009d4ccc29e4808af1ccc25c69b4d5d");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("https://api.smartable.ai/coronavirus/stats/global", requestOptions)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          
          // Examine the text in the response
          response.json().then(function(data) {
            let historyArray = data.stats.history;
            that.setState({'globalHistory': historyArray.slice(historyArray.length-historyLength, historyArray.length)});
            console.log(data);
            console.log(data.stats);
            that.createDataSet(historyArray.slice(historyArray.length-historyLength, historyArray.length));
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }
}

export default Data;