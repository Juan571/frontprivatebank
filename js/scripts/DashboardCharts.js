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
        var formatterEUR = new google.visualization.NumberFormat({suffix: 'EUR', decimalSymbol: '.'});

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
            [new Date(2016, 7), 1000000],
            [new Date(2016, 8), 850000],
            [new Date(2016, 9), 800000],
            [new Date(2016, 10), 790000],
            [new Date(2016, 11), 780000],
            [new Date(2017, 0), 920000]

        ]);
        formatterEUR.format(data, 1); // Apply formatter to second column
        var options = {
            chartArea: {
                top: 10,
                left: 80,
                right: 5
            },
            legend: {position: 'none'},
            pointSize: 8,
            vAxis: {title:'EUR', viewWindowMode: 'explicited',textStyle:{fontSize:9} },
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
        var formatterPercent = new google.visualization.NumberFormat({suffix: '%', decimalSymbol: '.'});
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'Rentabilidad');

        data.addRows([
            [new Date(2016, 0), 1],
            [new Date(2016, 1), 0.9],
            [new Date(2016, 2), 2],
            [new Date(2016, 3), 2.2],
            [new Date(2016, 4), 2.1],
            [new Date(2016, 5), 2.3],
            [new Date(2016, 6), 2.4],
            [new Date(2016, 7), 2.8],
            [new Date(2016, 8), 2.9],
            [new Date(2016, 9), 3],
            [new Date(2016, 10), 2.6],
            [new Date(2016, 11), 2.7],
            [new Date(2017, 0), 2.3]

        ]);
        formatterPercent.format(data,1);

        var options = {
            chartArea: {
                top: 10,
                left: 50,
                right: 5
            },
            legend: {position: 'none'},

            pointSize: 8,
            vAxis: {format:'#\'%\''},
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
            chartArea: {
                top: 10,
                left: 5,
                right: 5,
                bottom: 5
            },
            is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }

    //Posición
    function extracto_posicion() {
        var formatterEUR = new google.visualization.NumberFormat({suffix: 'EUR', decimalSymbol: '.'});

        var data = google.visualization.arrayToDataTable([

            ['Entity', 'Position(EUR)', { role: 'style' }],
            ['Iberdrola', 8100, 'color: violet'],
            ['Fondo Super Renta, CA', 3200, 'color: blue'],
            ['Santander', 2500, 'color: red'],
            ['Bonos USA', 2000, 'color: pink'],
        ]);

        formatterEUR.format(data,1);

        var options = {
            chartArea: {
                top: 10,
                left: 90,
                right: 5
            },
            legend:{position: 'none'},
            hAxis: {
                title: 'Posición (EUR)',
                minValue: 0,
                format: 'decimal'
            },
            vAxis: {

                textStyle:{fontSize:9}
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('extracto_posicion'));

        chart.draw(data, options);


    }

    //extracto_riesgo
    function extracto_riesgo() {

        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Riesgo', 80]
        ]);

        var options = {
            chartArea: {
                top: 10,
                right: 5
            },
            redFrom: 80, redTo: 100,
            yellowFrom:40, yellowTo: 80,
            greenFrom:0, greenTo: 40,
            minorTicks: 3
            //majorTicks: ['0','5','15','35','55','100']
        };

        var chart = new google.visualization.Gauge(document.getElementById('extracto_riesgo'));

        chart.draw(data, options);

    }

    //extracto_comparativa-benchmark
    function extracto_comparativa() {

        var formatterEUR = new google.visualization.NumberFormat({suffix: 'EUR', decimalSymbol: '.'});

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

        formatterEUR.format(data,1);
        formatterEUR.format(data,2);

        var options = {
            chartArea: {
                top: 10,
                left: 80,
                right: 5
            },
            legend:{position: 'top'},
            pointSize: 6,
            vAxis:{ title: 'EUR'},
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