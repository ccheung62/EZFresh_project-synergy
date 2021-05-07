//animates the chart everytime it appears on scroll
document.addEventListener("aos:in:animeChart", ({ detail }) => {
    drawStacked();
});

//Google Chart 
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
    // Array to display the data from https://www.bls.gov/charts/employment-situation/civilian-unemployment-rate.htm
    var data = google.visualization.arrayToDataTable([
        ['Month', 'rate(%)'],
        ['Jan 2020', 3.5],
        ['Feb 2020', 3.5],
        ['Mar 2020', 4.4],
        ['Apr 2020', 14.8],
        ['May 2020', 13.3],
        ['June 2020', 11.1],
        ['July 2020',10.2],
        ['Aug 2020', 8.4],
        ['Sept 2020', 7.8],
        ['Oct 2020', 6.9],
        ['Nov 2020', 6.7],
        ['Dec 2020', 6.7],
        ['Jan 2021', 6.3],
        ['Feb 2021', 6.2]
    ]);

    // Set the style of the chart    
    var options = {
        title: 'Civilian unemployment rate',
        titleTextStyle: {
            color: 'grey',   
            fontSize: 18,
            bold: true  
        },
        chartArea: {
            height: '66%',
            width: '66%'
        },
        colors: ['#bbe7c3'],
        hAxis: {
            slantedText:true, 
            slantedTextAngle: 45 
        },
        vAxis: {
            title: 'Percent (%)'
        },
        legend: 'none',
        backgroundColor: '#F3ECE7',
        fontName: 'ABeeZee',
        animation:{
            duration: 1000,
            easing: 'out',
            "startup": true
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// Make the graph responsive
window.addEventListener("resize", e => {
    drawStacked();
});