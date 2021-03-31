AOS.init();

document.addEventListener("aos:in:animeChart", ({ detail }) => {
    drawStacked();
});

// Responsive navbar
if(document.querySelector(".navbar") !== null){
    const navbar = document.querySelector(".navbar");
    window.onscroll = function(e) {
        if (this.scrollY < 45){
            switchNavBar();
        }
        else {
            navbar.classList.remove("topNavBar");
            // "false" for down and "true" for up
            if (this.oldScroll > this.scrollY){
                navbar.classList.remove("formHidden");
            }
            else{
                navbar.classList.add("formHidden");
            }
        }
    this.oldScroll = this.scrollY;
    }
}
// remove transparency when toggle is opened
function switchNavBar(){
    if (this.scrollY < 45){
        if (document.querySelector(".navbar-toggler").getAttribute("aria-expanded") === "true" || false){
            document.querySelector(".navbar").classList.remove("topNavBar");
        }
        else{
            document.querySelector(".navbar").classList.add("topNavBar");
        }
    }
}

// ['Month', 'total', 'Men, 20 years and over','Women, 20 years and over','16 to 19 years old','White','Black or African American','Asian','Hispanic or Latino'],
// ['Jan 2020', 3.5, 3.1, 3.2, 12.6, 3.0, 6.1, 3.1, 4.3],
// ['Feb 2020', 3.5, 3.2, 3.1, 11.5, 3.0, 6.0, 2.4, 4.4],
// ['Mar 2020', 4.4, 4.1, 4.0, 14.1, 3.9, 6.8, 4.1, 6.0],
// ['Apr 2020', 14.8, 13.1, 15.5, 32.1, 14.1, 16.7, 14.5, 18.9],
// ['May 2020', 13.3, 11.6, 13.9, 29.6, 12.3, 16.7, 14.9, 17.6],
// ['June 2020', 11.1, 10.2, 11.3, 22.6, 10.1, 15.3, 13.9, 14.5],
// ['July 2020',10.2, 9.4, 10.4, 19.1, 9.2, 14.4, 11.9, 12.7],
// ['Aug 2020', 8.4, 8.0, 8.3, 16.4, 7.4, 12.8, 10.6, 10.5],
// ['Sept 2020', 7.8, 7.3, 7.7, 16.3, 7.0, 12.0, 8.8, 10.3],
// ['Oct 2020', 6.9, 6.7, 6.5, 14.0, 6.0, 10.8, 7.6, 8.8],
// ['Nov 2020', 6.7, 6.6, 6.2, 13.9, 5.9, 10.3, 6.7, 8.4],
// ['Dec 2020', 6.7, 6.4, 6.3, 16.0, 6.0, 9.9, 5.9, 9.3],
// ['Jan 2021', 6.3, 6.0, 6.0, 14.8, 5.7, 9.2, 6.6, 8.6],
// ['Feb 2021', 6.2, 6.0, 5.9, 13.9, 5.6, 9.9, 5.1, 8.5]

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
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