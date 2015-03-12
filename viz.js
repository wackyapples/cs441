google.load('visualization', '1', {
    packages: ['corechart']
});

// Default (Retreats) chart data
var chartText = {
    queryStr: "SELECT Total_R FROM 1sgTnIGOiutCr7mgVdMFjT17BiHfQAblXMHGyYnVw",
    hAxis: "Retreats",
    title: "Retreat Behavior",
    colLabel: "Retreats",
};


// Big Callback function
// This feels.... dirty
function drawVisualization() {

    // Query handler, processes the data from a response
    function handleQueryResponse(response) {

        // Respond to errors, displays an alert
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var data = response.getDataTable();
        // console.log(data)
        data.setColumnLabel(0, chartText.colLabel);
        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        // var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    };

    var opts = {
        sendMethod: 'auto'
    };

    // Create new Fusion Tables query
    var query = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // Set basic graph options
    var options = {
        title: "Frequency of " + chartText.title + " Amongst All Crabs",
        vAxis: {
            title: "Frequency"
        },
        hAxis: {
            title: chartText.hAxis
        },
        // Group buckets by 5
        histogram: {
            bucketSize: 5
        }
    };

    // Get the specific data we want
    query.setQuery(chartText.queryStr);

    // Send the query with a callback function.
    query.send(handleQueryResponse);
};

// Run this on load
google.setOnLoadCallback(drawVisualization);