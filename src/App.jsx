import React from 'react';
import { Scatter } from 'react-chartjs-2';
import styled from 'styled-components';
import dimensions from './styles/dimensions';

const data = {
  labels: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7', 'Player11', 'Player12', 'Player13', 'Player14', 'Player15', 'Player16', 'Player17'],
  datasets: [
    {
      label: 'Houston Rockets',
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      fill: true,
      backgroundColor: 'rgba(234, 48, 73, 1)',
      pointBorderColor: 'rgba(234, 48, 73, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(234, 48, 73, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    },
    {
      label: 'New Orleans Pelicans',
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      fill: true,
      backgroundColor: 'rgba(11, 35, 63, 1)',
      pointBorderColor: 'rgba(11, 35, 63, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(11, 35, 63, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [
        { x: 35, y: 35 },
        { x: 59, y: 89 },
        { x: 80, y: 50 },
        { x: 31, y: 59 },
        { x: 56, y: 36 },
        { x: 33, y: 25 },
        { x: 40, y: 28 },
      ]
    },
  ]
};

const options = {
  responsive: true,
  tooltips: {
    mode: 'nearest',
    callbacks: {
      label: function(toolTipItem, data) {
        let label = data.datasets[toolTipItem.datasetIndex].labels[toolTipItem.index] || '';

        if (label) label += ': ( ' + toolTipItem.xLabel + ', ' + toolTipItem.yLabel + ')';

        return label;
      }
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        labels: {
          show: true
        }
      }
    ],
    yAxes: [
      {
        display: true,
        labels: {
          show: true
        }
      }
    ]
  }
};

const LayoutContainer = styled.div`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }

    .Layout__content {
        padding-bottom: 5em;
    }
`;


function App() {
  return (
    <LayoutContainer className="App">
      <h1>Basketball Stats</h1>
      <div>
        <Scatter data={data} options={options}/>
      </div>
    </LayoutContainer>
  );
}

export default App;
