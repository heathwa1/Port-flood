var high99 = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1.0, 1.2, 1.4, 1.5, 1.6, 1.6];
var high95 = [0.3, 0.4, 0.5, 0.7, 0.9, 1.1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.1, 2.3];
var low99 = [0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.6, 0.7, 0.7, 0.8, 0.8, 0.7, 0.8];
var low95 = [0.2, 0.4, 0.5, 0.6, 0.7, 0.9, 1.0, 1.1, 1.2, 1.3, 1.3, 1.3, 1.4];
var labels = [2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100, 2110, 2120, 2130, 2140, 2150];

// tutorial help
// https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/#2-line-chart

new Chart(document.getElementById('lineChart'), {

  type: 'line',
  data: {
    labels: [2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100, 2110, 2120, 2130, 2140, 2150],
    datasets: [{
      label: '99% High Est',
      pointRadius: 4,
      pointBorderWidth: 1.5,
      pointHoverBackgroundColor: '#3e95cd',
      data:[0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1.0, 1.2, 1.4, 1.5, 1.6, 1.6],
      borderColor: '#3e95cd',
      fill: false
    }, {
      data: [0.3, 0.4, 0.5, 0.7, 0.9, 1.1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.1, 2.3],
      label: '95% High Est',
      pointRadius: 4,
      pointBorderWidth: 1.5,
      pointHoverBackgroundColor:'#8e5ea2',
      borderColor: '#8e5ea2',
      fill: false
    }, {
      data: [0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.6, 0.7, 0.7, 0.8, 0.8, 0.7, 0.8],
      label: '99% Low Est',
      pointRadius: 4,
      pointBorderWidth: 1.5,
      pointHoverBackgroundColor:'#3cba9f',
      borderColor: '#3cba9f',
      fill: false
    }, {
      data: [0.2, 0.4, 0.5, 0.6, 0.7, 0.9, 1.0, 1.1, 1.2, 1.3, 1.3, 1.3, 1.4],
      label: '95% Low Est',
      pointRadius: 4,
      pointBorderWidth: 1.5,
      pointHoverBackgroundColor: '#e8c3b9',
      borderColor: '#e8c3b9',
      fill: false
    }
  ]
},
  options: {
    plugins: {
      legend: {
        position: 'bottom',
      },

      title: {
        display: true,
        text: 'Predicted Sea Level Rise',
        fontSize: 36,
        fontFamily:'Helvetica'
      },
    }
  },
});
