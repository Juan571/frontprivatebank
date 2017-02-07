var DiversificacionCharts = function(){

	var initGooogleCharts = function(){
		google.charts.load('current', {packages: ['corechart', 'line','gauge','table']});

	    google.charts.setOnLoadCallback(tipo_divisa);
	    google.charts.setOnLoadCallback(tipo_activo);
	    google.charts.setOnLoadCallback(area_geografica);
	    google.charts.setOnLoadCallback(por_sector);

	}


    //tipo divisa
   	function tipo_divisa() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo', 'Valor'],
            ['EUR',642216.79],
            ['GBP',351145.39]
        ]);

        var options = {
            is3D: true,
            legend: 'none',
            colors: ['#4286f4', '#f442b9']
        };

        var chart = new google.visualization.PieChart(document.getElementById('divisa_piechart'));
        chart.draw(data, options);


        ///////////table//////////////

        var cssClassNames = {
            'headerRow': 'cabecera',
            'tableRow': '',
            'oddTableRow': '',
            'selectedTableRow': '',
            'hoverTableRow': '',
            'headerCell': 'celda-cabecera',
            'tableCell': 'celda-tabla',
            'rowNumberCell': ''};

        var options = {
            'allowHtml': true,
            'cssClassNames': cssClassNames

        };

        var data2 = new google.visualization.DataTable();


        data2.addColumn('string', '');
        data2.addColumn('number', 'Valor en EUR');
        data2.addColumn('string', '% del Valor de los Activos');
        data2.addRows([
            ['EUR',  {v: 642216.79, f: '642.216,79'}, '100%'],
            ['GBP',  {v: 351145.39, f: '351.145.39'}, '100%']
        ]);
        var table = new google.visualization.Table(document.getElementById('divisa_table'));

        var formatter = new google.visualization.ColorFormat();
        formatter.addRange('EUR','EUR', 'white','orange');
        formatter.addRange('GBP','GBP', 'red', '#33ff33');
        formatter.format(data2, 0); // Apply formatter to second column

        table.draw(data2, options);
    }


    //Diversificación por tipo de activo
    function tipo_activo() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo', 'Valor'],
            ['Fonddo de Inversion Mobiliaria',993362.18]
        ]);

        var options = {
            is3D: true,
            legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('activo_piechart'));
        chart.draw(data, options);


        ///////////table//////////////

        var cssClassNames = {
            'headerRow': 'cabecera',
            'tableRow': '',
            'oddTableRow': '',
            'selectedTableRow': '',
            'hoverTableRow': '',
            'headerCell': 'celda-cabecera',
            'tableCell': 'celda-tabla',
            'rowNumberCell': ''};

        var options = {'allowHtml': true, 'cssClassNames': cssClassNames};

        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', '');
        data2.addColumn('number', 'Valor en EUR');
        data2.addColumn('string', '% del Valor de los Activos');
        data2.addRows([
            ['Fondo de Inversion Mobiliaria',  {v: 993362.18, f: '993.362,18'}, '100%']
        ]);


        var table = new google.visualization.Table(document.getElementById('activo_table'));

        table.draw(data2, options);
    }

    //Diversificación por area Geográfica
    function area_geografica() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo', 'Valor'],
            ['Europa(UK no Incluido)',651705.87],
            ['Mundial)',341656.31]
        ]);

        var options = {
            is3D: true,
            legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('area_piechart'));
        chart.draw(data, options);


        ///////////table//////////////

        var cssClassNames = {
            'headerRow': 'cabecera',
            'tableRow': '',
            'oddTableRow': '',
            'selectedTableRow': '',
            'hoverTableRow': '',
            'headerCell': 'celda-cabecera',
            'tableCell': 'celda-tabla',
            'rowNumberCell': ''};

        var options = {'allowHtml': true, 'cssClassNames': cssClassNames};

        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', '');
        data2.addColumn('number', 'Valor en EUR');
        data2.addColumn('string', '% del Valor de los Activos');
        data2.addRows([
            ['Europa (UK no incluido',  {v: 651705.87, f: '651.705,87'}, '34.4%'],
            ['Mundial',  {v: 341656.31, f: '341.656,31'}, '65.6%']
        ]);


        var table = new google.visualization.Table(document.getElementById('area_table'));

        table.draw(data2, options);
    }

    //Diversificación por sector
    function por_sector() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo', 'Valor'],
            ['Financiero',993362.18]
        ]);

        var options = {
            is3D: true,
            legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('sector_piechart'));
        chart.draw(data, options);


        ///////////table//////////////

        var cssClassNames = {
            'headerRow': 'cabecera',
            'tableRow': '',
            'oddTableRow': '',
            'selectedTableRow': '',
            'hoverTableRow': '',
            'headerCell': 'celda-cabecera',
            'tableCell': 'celda-tabla',
            'rowNumberCell': ''};

        var options = {'allowHtml': true, 'cssClassNames': cssClassNames};

        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', '');
        data2.addColumn('number', 'Valor en EUR');
        data2.addColumn('string', '% del Valor de los Activos');
        data2.addRows([
            ['Financiero',  {v: 993362.18, f: '993.362,18'}, '100%']
        ]);


        var table = new google.visualization.Table(document.getElementById('sector_table'));

        table.draw(data2, options);
    }


    return {
    	init : function(){
    		initGooogleCharts();
    	}
    }
	
};