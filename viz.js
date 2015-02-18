google.load('visualization', '1', {
    packages: ['corechart']
});

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
        data.setColumnLabel(0, 'Total Retreats');
        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    var opts = {
        sendMethod: 'auto'
    };

    // Create new Fusion Tables query
    var query = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // Set basic graph options
    var options = {
        title: "Frequency of Retreat Behavior Amongst All Crabs",
        vAxis: {
            title: "Frequency"
        },
        hAxis: {
            title: "Retreats"
        },
        // Group buckets by 5
        histogram: {
            bucketSize: 5
        }
    };

    // Get the specific data we want
    query.setQuery("SELECT Total_R FROM 1sgTnIGOiutCr7mgVdMFjT17BiHfQAblXMHGyYnVw");

    // Send the query with a callback function.
    query.send(handleQueryResponse);
}

google.setOnLoadCallback(drawVisualization);