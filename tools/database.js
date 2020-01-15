var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    connectionLimit: process.env.DBCONNECTIONLIMIT,
    supportBigNumbers: process.env.DBSUPPORTBIGNUMBERS
});

class LeaderboardResultSet {
    constructor(label) {
        this.label = label;
        this.background = "rgb(255, 99, 132)";
        this.fill = "false";
        this.bordercolor = "rgb(255, 99, 132)";
        this.data = [];
    }
}

function formatLeaderboardJSON(results) {
    var resultsCount = results.length;
    if ( resultsCount < 1 ) {
        return {message: "No chart data"};
    }
    var leaders = [];
    leaders.push(new LeaderboardResultSet(results[0].userID));
    leaders[0].data.push(results[0].difference);
    var labels = [results[0].time];
    if ( resultsCount > 1 ) {
        for(var i = 1; i < leaders.length; i++) {
            for(var j = 0; j < resultsCount;j++) {
            }
        }

    }
    var chartData = {
        "labels": labels,
        "chartInfo": leaders
    };
    return chartData;
}

function formatStocksJSON(results) {
    var resultsCount = results.length;
    if ( resultsCount < 1 ) {
        return {message: "No chart data"};
    }
    var tickers = [{ label: results[0].symbol, 
                    background: "rgb(255, 99, 132)",
                    fill: "false",
                    bordercolor: "rgb(255, 99, 132)",
                    data: [results[0].close]
                }];
    var labels = [results[0].time];
        
    if ( resultsCount > 1 ) {
        for(var i = 1; i < resultsCount; i++) {
            for(var j = 0; j < tickers.length; j++) {
                if ( results[i].symbol === tickers[j].label ) {
                    tickers[j].data.push(results[i].close);
                    labels.push(results[i].time);
                } 
                else {
                    tickers.push({
                        label: results[i].symbol, 
                        background: "rgb(255, 99, 132)",
                        fill: "false",
                        bordercolor: "rgb(255, 99, 132)",
                        data: [results[i].close]
                    });
                    labels.push(results[i].time);
                }
            }
        }
    }
    var chartData = {
        "labels": labels,
        "chartInfo": tickers
    };
    return chartData;
}

exports.getTop5Strats = function(callback) {
    const queryString = "SELECT * from leaderboard where position >= 1 and position <= 5";

    pool.getConnection(function(err, connection) {
        if (err) {console.log(err); callback(true); return;}
        connection.query(queryString, function(err, results) {
            connection.release();
            if(err) {console.log(err); callback(true); return;}
            var chartData = formatLeaderboardJSON(results);
            callback(false, chartData);
        })
    })
};

exports.getTop5Stocks = function(callback) {
    const queryString = "SELECT * from time_series_5minute";

    pool.getConnection(function(err, connection) {
        if (err) {console.log(err); callback(true); return;}
        connection.query(queryString, function(err, results) {
            connection.release();
            if(err) {console.log(err); callback(true); return;}
            var chartData = formatStocksJSON(results);
            callback(false, chartData);
        })
    })
};

exports.getChartFromDatabase = function(callback) {
    const queryString = "SELECT * from leaderboard where position >= 1 and position <= 5";

    pool.getConnection(function(err, connection) {
        if (err) {console.log(err); callback(true); return;}
        connection.query(queryString, function(err, results) {
            connection.release();
            if(err) {console.log(err); callback(true); return;}
            var chartData = formatStocksJSON(results);
            callback(false, chartData);
        })
    })
};
