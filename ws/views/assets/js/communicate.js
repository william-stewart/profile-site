//Event listeners
// On load of trade.html, populate the necessary charts
const uri = document.documentURI.split('/');
if (uri[uri.length-1].includes('trade.html')) {
    document.addEventListener("DOMContentLoaded", function() {
    popChart2d('top5strats');
    popChart2d('top5stocks');
    //popChartTime();
    
    const button = document.getElementById('playlink');
    if(button){
    button.addEventListener('click', event =>{
        alert("This feature not available to everybody yet.")
    })
    }
});
}

//Functions
async function popChart2d(chartName){
    const api_url = '/ws/getchartdata/' + chartName;
    try {
        const response = await fetch(api_url);
        const res_json = await response.json();
        
        var numDatasets = Object.keys(res_json.chartInfo).length;
        var datasetsJSON = [];
        res_json.chartInfo.forEach(el => {
            datasetsJSON.push(el);
        })
        
        var ctx2 = document.getElementById(chartName).getContext('2d');
        var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: res_json.labels,
            datasets: datasetsJSON
        },
        options: {}
        
    }) 
    }
    catch(error) {
        console.log(error);
    }
}

async function popChart2dTest(chartName){
    const api_url = '/ws/getchartdatatest/' + chartName;
    try {
        const response = await fetch(api_url);
        const res_json = await response.json();
    
        var ctx = document.getElementById(chartName).getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: res_json.labels,
            datasets: [res_json.chartInfo[0], res_json.chartInfo[1], res_json.chartInfo[2],
                       res_json.chartInfo[3], res_json.chartInfo[4]]
        },
        options: {}
    }) 
    }
    catch(error) {
        console.log(error);
    }
}

function popChartTime() {
    var date1 = new Date(2020,1,9);
    var date2 = new Date(2020,1,10);
    var data =  {datasets: [{
        label: 'test dataset',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        fill: false,
        data: [{
            x: date1,
            y: 1
        },{
            x: date2,
            y:10
        }]
    }]
               };
    console.log(data);
    var ctx = document.getElementById('timechart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
				title: {
					display: true,
					text: 'Chart.js Time Point Data'
				},
				scales: {
					xAxes: [{
						type: 'time',
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Date'
						},
						ticks: {
							major: {
								fontStyle: 'bold',
								fontColor: '#FF0000'
							}
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'value'
						}
					}]
				}
        }
    });
}