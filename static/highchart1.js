$(document).ready(function() {
  $.ajax({
    url: '/get_data',  
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log("Datos recibidos: ", data);
      // Prepara los datos para Highcharts
      var chartData = [];

      // Itera sobre los datos y agrega los puntos de datos al array
      for (var i = 0; i < data.length; i++) {
        chartData.push({
          name: data[i].name, // Cambia "name" a "artists" para reflejar la columna correcta
          popularity: data[i].popularity,
          // Agrega más propiedades según tus necesidades
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
