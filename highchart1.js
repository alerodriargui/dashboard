$(document).ready(function() {
    $.ajax({
      url: 'data.php', // Asegúrate de que el archivo PHP tenga este nombre y devuelve datos en un formato adecuado
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        // Prepara los datos para Highcharts
        var categories = [];
        var values = [];
  
        // Itera sobre los datos y extrae las categorías (nacionalidades) y valores (número de estudiantes)
        for (var i = 0; i < data.length; i++) {
          categories.push(data[i].nacionalidad);
          values.push(parseInt(data[i].total, 10));
        }
        // Crea un gráfico de barras
        Highcharts.chart('chart-container', {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Número de Estudiantes por Nacionalidad'
          },
          xAxis: {
            categories: categories
          },
          yAxis: {
            title: {
              text: 'Número de Estudiantes'
            }
          },
          series: [{
            name: 'Estudiantes',
            data: values
          }]
        });
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
  