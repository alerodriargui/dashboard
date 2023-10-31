$(document).ready(function() {
  $.ajax({
    url: '/get_data',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log("Datos recibidos: ", data);

      // Ordenar los datos por popularidad en orden descendente
      data.sort(function(a, b) {
        return b.popularity - a.popularity;
      });

      // Prepara los datos para Highcharts
      var chartData = [];

      // Itera sobre los datos y agrega los puntos de datos al array
      for (var i = 0; i < data.length; i++) {
        fullName = data[i].artists + " - " + data[i].name;
        chartData.push({
          name: fullName,
          popularity: data[i].popularity,
        });
      }

      // Crea un gráfico de barras
      Highcharts.chart('chart-container1', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Popularidad de las Canciones'
        },
        xAxis: {
          title: {
            text: 'Canciones'
          },
          categories: chartData.map(item => item.name)
        },
        yAxis: {
          title: {
            text: 'Popularidad'
          }
        },
        series: [{
          name: 'Popularidad',
          data: chartData.map(item => item.popularity)
        }]
      });
    },
    // Manejar el error
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error en la solicitud AJAX:");
      console.log("Estado de la solicitud:", textStatus);
      console.log("Error lanzado:", errorThrown);
      console.log("Respuesta del servidor:", jqXHR.responseText);
    }    
  });
});
