function createChart(chartName) {

  if (chartName === 'chartTop5Strategies') {
    return chartTop5Strat();
  }
  else if (chartName === 'chartTop5Stocks') {
    return chartTop5Stocks();
  } 
  else if (chartName === 'chartFromDatabase') {
    return chartFromDatabase();
  } else {
    return null;
  }
}

function chartTop5Strat() {
  var chartData = {
    "labels" : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    "chartInfo" : [{
      "label" : "JBarns",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [0, 1, 2.5, 3, 2.5]
    },{
      "label" : "TMichael",
      "backgroundColor" : "rgb(255, 87, 51)",
      "fill" : "false",
      "borderColor" : "rgb(255, 87, 51)",
      "data" : [0, -3, -2, -.8, 1]
    },{
      "label" : "ZPress",
      "backgroundColor" : "rgb(31, 97, 141)",
      "fill" : "false",
      "borderColor" : "rgb(31, 97, 141)",
      "data" : [0, 3, 2, -.5, .9]
    },{
      "label" : "LManny",
      "backgroundColor" : "rgb(46, 204, 113)",
      "fill" : "false",
      "borderColor" : "rgb(46, 204, 113)",
      "data" : [0, .2, .3, .4, .8]
    },{
      "label" : "PTren",
      "backgroundColor" : "rgb(86, 101, 115)",
      "fill" : "false",
      "borderColor" : "rgb(86, 101, 115)",
      "data" : [0, 1, 2, -.5, -.7]
    }]
  }

  return chartData;
}

function chartTop5Stocks() {
  var chartData = {
    "labels" : ['9:30', '10:00', '10:30', '11:00', '11:30','12:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00'],
    "chartInfo" : [{
      "label" : "NIO - NIO Limited",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [3.115,3.22,3.489,3.34,3.615,3.99,4.185,4.195,4.105,4.085,3.77,3.8,3.77]
    },{
      "label" : "RLLCF - Rolls-Royce Holdings",
      "backgroundColor" : "rgb(255, 87, 51)",
      "fill" : "false",
      "borderColor" : "rgb(255, 87, 51)",
      "data" : [0, -3, -2, -.8, 1]
    },{
      "label" : "KATFF - Katanga Mining Limited",
      "backgroundColor" : "rgb(31, 97, 141)",
      "fill" : "false",
      "borderColor" : "rgb(31, 97, 141)",
      "data" : [0, 3, 2, -.5, .9]
    },{
      "label" : "BNTX - BioNTech SE",
      "backgroundColor" : "rgb(46, 204, 113)",
      "fill" : "false",
      "borderColor" : "rgb(46, 204, 113)",
      "data" : [0, .2, .3, .4, .8]
    },{
      "label" : "USNZY - 	Usinas Siderurgicas de Minas Gerais S.A.",
      "backgroundColor" : "rgb(86, 101, 115)",
      "fill" : "false",
      "borderColor" : "rgb(86, 101, 115)",
      "data" : [0, 1, 2, -.5, -.7]
    }]
  }

  return chartData;
}


function chartFromDatabase(connection){
  var chartData = {
    "labels" : ['2020-01-03T23:55:00.000Z', '2020-01-04T00:00:00.000Z'],
    "chartInfo" : [{
      "label" : "MSFT",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [158.81, 158.59]
    },{
      "label" : "MSFT",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [158.81, 158.59]
    },{
      "label" : "MSFT",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [158.81, 158.59]
    },{
      "label" : "MSFT",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [158.81, 158.59]
    },{
      "label" : "MSFT",
      "backgroundColor" : "rgb(255, 99, 132)",
      "fill" : "false",
      "borderColor" : "rgb(255, 99, 132)",
      "data" : [158.81, 158.59]
    }]
  }
  return chartData;
}


module.exports.createChart = createChart;
