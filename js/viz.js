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

    // The data comes from the aggroData array
    var data = google.visualization.arrayToDataTable(aggroData[chartText.tier]);

    var options = {
        title: "Number of " + chartText.title + " behaviors amongst all crabs",
        height: 400,
        vAxis: {
            title: chartText.vAxis,
            viewWindowMode: 'explict',
            viewWindow: {
                max: 200,
            },
        },
        hAxis: {
            title: chartText.hAxis
        },
        legend: {
            position: 'right',
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