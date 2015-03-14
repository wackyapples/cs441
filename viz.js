google.load('visualization', '1', {
    packages: ['corechart']
});

// Default (Tier 1) chart data
// This needs to be standarized with those in
// app.js, that is, completely refactored.
var chartText = {
    // queryStr: "SELECT Treat_Group, Total_R FROM 1sgTnIGOiutCr7mgVdMFjT17BiHfQAblXMHGyYnVw",
    tier: 0,
    hAxis: "Crab trio number",
    title: "tier 1",
    vAxis: "Total tier 1 behaviors",
};


// Big Callback function
// This feels.... dirty
function drawVisualization() {

    // Query handler, processes the data from a response
    // function handleQueryResponse(response) {

    //     // Respond to errors, displays an alert
    //     if (response.isError()) {
    //         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    //         return;
    //     }

    //     var data = response.getDataTable();
    //     // console.log(data)
    //     data.setColumnLabel(0, chartText.colLabel);
    //     var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    //     // var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
    //     chart.draw(data, options);
    // };

    // var opts = {
    //     sendMethod: 'auto'
    // };

    // Create new Fusion Tables query
    // var query = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // // Set basic graph options
    // var options = {
    //     title: "Frequency of " + chartText.title + " Amongst All Crabs",
    //     vAxis: {
    //         title: "Frequency"
    //     },
    //     hAxis: {
    //         title: chartText.hAxis
    //     },
    //     // Group buckets by 5
    //     histogram: {
    //         bucketSize: 5
    //     }
    // };

    // // Get the specific data we want
    // query.setQuery(chartText.queryStr);

    // // Send the query with a callback function.
    // query.send(handleQueryResponse);

    // The data comes from the aggroData array
    var data = google.visualization.arrayToDataTable(aggroData[chartText.tier]);

    var options = {
        title: "Number of " + chartText.title + " behaviors amongst all crabs",
        height: 400,
        vAxis: {
            title: chartText.vAxis
        },
        hAxis: {
            title: chartText.hAxis
        },
        legend: {
            position: 'right',
            maxLines: 3
        },
        bar: {
            groupWidth: '75%'
        },
        // Make the chart stacked
        isStacked: true,
        animation:{
            startup: true,
            duration: 1000,
            easing: 'in'
        },
    };

    // Select the div and draw the chart!
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

// Run this on load
google.setOnLoadCallback(drawVisualization);