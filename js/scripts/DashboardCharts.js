var DashboardCharts = function(){
	
	var initGooogleCharts = function(){
		google.charts.load('current', {packages: ['corechart', 'line','gauge']});
	    google.charts.setOnLoadCallback(extracto_valoracion);
	    google.charts.setOnLoadCallback(extracto_rentabilidad);
	    google.charts.setOnLoadCallback(extracto_diversificacion);
	    google.charts.setOnLoadCallback(extracto_posicion);
	    google.charts.setOnLoadCallback(extracto_riesgo);
	    google.charts.setOnLoadCallback(extracto_comparativa);
	}
    //Valoración
	function extracto_valoracion() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'valoración');

        data.addRows([
            [new Date(2016, 0), 850000],
            [new Date(2016, 1), 790000],
            [new Date(2016, 2), 800000],
            [new Date(2016, 3), 790000],
            [new Date(2016, 4), 780000],
            [new Date(2016, 5), 880000],
            [new Date(2016, 6), 850000],
            [new Date(2016, 7), 980000],
            [new Date(2016, 8), 850000],
            [new Date(2016, 9), 800000],
            [new Date(2016, 10), 790000],
            [new Date(2016, 11), 780000],
            [new Date(2017, 0), 920000]

        ]);

        var options = {
            legend: {position: 'top'},
            pointSize: 8,
            vAxis: {format: 'currency'},
            series:{ 0: {color:'#578EBE', pointShape:'diamond'}},
            hAxis: {
                ticks: [new Date(2016, 0), new Date(2016, 1), new Date(2016, 2), new Date(2016, 3),
                    new Date(2016, 4), new Date(2016, 5), new Date(2016, 6), new Date(2016, 7),
                    new Date(2016, 8), new Date(2016, 9), new Date(2016, 10), new Date(2016, 11), new Date(2017, 0)
                ]
            },
        };
        var chart = new google.visualization.LineChart(document.getElementById('extracto_valoracion'));

        chart.draw(data, options);
    }

    //extracto_rentabilidad
   	function extracto_rentabilidad() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'extracto_rentabilidad');

        data.addRows([
            [new Date(2016, 0), 1250],
            [new Date(2016, 1), 1870],
            [new Date(2016, 2), 1670],
            [new Date(2016, 3), 2250],
            [new Date(2016, 4), 2450],
            [new Date(2016, 5), 2850],
            [new Date(2016, 6), 2520],
            [new Date(2016, 7), 2590],
            [new Date(2016, 8), 2900],
            [new Date(2016, 9), 2950],
            [new Date(2016, 10), 1850],
            [new Date(2016, 11), 1990],
            [new Date(2017, 0), 2490]

        ]);

        var options = {
            legend: {position: 'top'},
            pointSize: 8,
            vAxis: {format: 'currency'},
            series:{ 0: {color:'#5C9BD1'}},
            hAxis: {
                ticks: [new Date(2016, 0), new Date(2016, 1), new Date(2016, 2), new Date(2016, 3),
                    new Date(2016, 4), new Date(2016, 5), new Date(2016, 6), new Date(2016, 7),
                    new Date(2016, 8), new Date(2016, 9), new Date(2016, 10), new Date(2016, 11), new Date(2017, 0)
                ]
            },
        };
        var chart = new google.visualization.LineChart(document.getElementById('extracto_rentabilidad'));

        chart.draw(data, options);
    }
    //Diversificación por tipo de activo
    function extracto_diversificacion() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Activo1',     6],
            ['Activo2',      4],
            ['Activo3',  3],
            ['Activo5',    7]
        ]);

        var options = {
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }

    //Posición
    function extracto_posicion() {
        var data = google.visualization.arrayToDataTable([

            ['Entity', 'Population', { role: 'style' }],
            ['Iberdrola', 8100, 'color: violet'],
            ['Fondo Super Renta, CA', 3200, 'color: blue'],
            ['Santander', 2500, 'color: red'],
            ['Bonos USA', 2000, 'color: pink'],
        ]);

        var options = {
            legend:{position: 'none'},
            hAxis: {
                title: 'Position',
                minValue: 0
            },
            vAxis: {
                title: 'Entity'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('extracto_posicion'));

        chart.draw(data, options);


    }

    //extracto_riesgo
    function extracto_riesgo() {

        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Riesgo', 68]
        ]);

        var options = {
            redFrom: 90, redTo: 100,
            yellowFrom:75, yellowTo: 90,
            greenFrom:0, greenTo: 75,
            minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('extracto_riesgo'));

        chart.draw(data, options);

        setInterval(function() {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 13000);
    }

    //extracto_comparativa-benchmark
    function extracto_comparativa() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'valor1');
        data.addColumn('number', 'valor2');

        data.addRows([
            [new Date(2016, 0), 850000, 750000],
            [new Date(2016, 1), 790000, 780000],
            [new Date(2016, 2), 800000, 880000],
            [new Date(2016, 3), 790000, 799000],
            [new Date(2016, 4), 780000, 750000],
            [new Date(2016, 5), 880000, 890000],
            [new Date(2016, 6), 850000, 855000],
            [new Date(2016, 7), 980000, 970000],
            [new Date(2016, 8), 850000, 750000],
            [new Date(2016, 9), 800000, 850000],
            [new Date(2016, 10), 790000, 770000],
            [new Date(2016, 11), 780000, 680000],
            [new Date(2017, 0), 920000, 930000]

        ]);

        var options = {
            legend:{position: 'top'},
            pointSize: 8,
            vAxis:{format: 'currency'},
            hAxis: {
                ticks:
                        [new Date(2016, 0), new Date(2016, 1), new Date(2016, 2), new Date(2016, 3),
                            new Date(2016, 4),  new Date(2016, 5), new Date(2016, 6), new Date(2016, 7),
                            new Date(2016, 8), new Date(2016, 9), new Date(2016, 10), new Date(2016, 11), new Date(2017, 0)
                        ]
            },
        };

        var chart = new google.visualization.LineChart(document.getElementById('extracto_comparativa'));

        chart.draw(data, options);
    }
    
    return {
    	init : function(){
    		initGooogleCharts();
    	}
    }
	
}