// Chart Options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f9a7bb",
    foreColor: "#333"
  },
  //The data goes in something called series which will actually be an array with an object inside
  series: [
    {
      name: "Population",
      data: [
        8550405,
        3971883,
        2720546,
        2296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
      ]
    }
  ],
  xaxis: {
    //categories is actaully an array of the labels
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#CCCCFF"]
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Largest US Cities by Population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

// Initialize the Chart
//We'll find the chart div using query selector to grab ID of chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render our Chart
chart.render();

// Event Method Example
document.querySelector("button").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);
