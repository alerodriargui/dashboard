$(document).ready(function() {
  $.ajax({
    url: '/get_data3',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log("Datos recibidos: ", data);

      // Ordenar los datos por duración en orden descendente
      data.sort(function(a, b) {
        return b.duration_ms - a.duration_ms;
      });

      // Prepara los datos para Highcharts
      var chartData = [];

      // Itera sobre los datos y agrega los puntos de datos al array
      for (var i = 0; i < data.length; i++) {
        chartData.push({
          name: data[i].name,
          duration_ms: data[i].duration_ms
          // Agrega más propiedades según tus necesidades
        });
      }

      // Crea un gráfico de barras
      Highcharts.chart('chart-container3', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Duración de Canciones en Milisegundos'
        },
        xAxis: {
          title: {
            text: 'Canciones'
          },
          categories: chartData.map(item => item.name)
        },
        yAxis: {
          title: {
            text: 'Duración (ms)'
          }
        },
        series: [{
          name: 'Duración',
          data: chartData.map(item => item.duration_ms)
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
