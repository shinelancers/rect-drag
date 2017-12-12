// hour chart
$.getJSON('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (data) {
    // parse data
    var stockdata = [];
    for (var i = 0; i < data["Data"].length; i++) {
        var unitData = data["Data"][i];
        var unitStockData = [];
        unitStockData.push(unitData["time"]);//.toString().concat("000"));
        unitStockData.push(unitData["open"]);
        unitStockData.push(unitData["high"]);
        unitStockData.push(unitData["low"]);
        unitStockData.push(unitData["close"]);
        stockdata.push(unitStockData);
    }
    // create the chart
    Highcharts.stockChart('day-container', {
        rangeSelector: {
            selected: 1,
            inputEnabled: false,
            buttonTheme: {
                visibility: 'visibile'
            },
            labelStyle: {
                visibility: 'visibile'
            }
        },
        title: {
            text: ''
        },
        plotOptions: {
            turboThreshold: 2000
        },
        series: [{
            type: 'candlestick',
            name: 'Cryptocompare Stock Price By Hour',
            data: stockdata,
        }]
    });
});

// day chart
$.getJSON('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', function (data) {
    // parse data
    var stockdata = [];
    for (var i = 0; i < data["Data"].length; i++) {
        var unitData = data["Data"][i];
        var unitStockData = [];
        unitStockData.push(unitData["time"]);//.toString().concat("000"));
        unitStockData.push(unitData["open"]);
        unitStockData.push(unitData["high"]);
        unitStockData.push(unitData["low"]);
        unitStockData.push(unitData["close"]);
        stockdata.push(unitStockData);
    }
    // create the chart
    Highcharts.stockChart('day-container', {
        rangeSelector: {
            selected: 1,
            inputEnabled: false,
            buttonTheme: {
                visibility: 'visibile'
            },
            labelStyle: {
                visibility: 'visibile'
            }
        },
        title: {
            text: ''
        },
        plotOptions: {
            turboThreshold: 2000
        },
        series: [{
            type: 'candlestick',
            name: 'Cryptocompare Stock Price By Day',
            data: stockdata,
        }]
    });
});