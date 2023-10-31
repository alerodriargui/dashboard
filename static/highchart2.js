$(document).ready(function() {
  $.ajax({
    url: '/get_data2',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log("Datos recibidos: ", data);

      // Crear un objeto para almacenar las sumas y los recuentos de weekly movement por nombre de álbum
      var albumData = {};

      // Iterar sobre los datos y acumular las sumas y recuentos
      for (var i = 0; i < data.length; i++) {
        var albumName = data[i].album_name;
        var weeklyMovement = data[i].weekly_movement;

        if (!albumData[albumName]) {
          albumData[albumName] = {
            totalMovement: weeklyMovement,
            count: 1
          };
        } else {
          albumData[albumName].totalMovement += weeklyMovement;
          albumData[albumName].count++;
        }
      }

      // Calcular las medias y preparar los datos para Highcharts
      var chartData = [];

      for (var album in albumData) {
        if (albumData.hasOwnProperty(album)) {
          var averageMovement = albumData[album].totalMovement / albumData[album].count;
          chartData.push({
            name: album,
            weekly_movement: averageMovement
            // Agrega más propiedades según tus necesidades
          });
        }
      }

      // Ordenar los datos por el movimiento semanal en orden descendente
      chartData.sort(function(a, b) {
        return b.weekly_movement - a.weekly_movement;
      });

      // Crea un gráfico de barras
      Highcharts.chart('chart-container2', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Media de Movimiento Semanal de Álbumes'
        },
        xAxis: {
          title: {
            text: 'Álbumes'
          },
          categories: chartData.map(item => item.name)
        },
        yAxis: {
          title: {
            text: 'Media de Movimiento Semanal'
          }
        },
        series: [{
          name: 'Media de Movimiento Semanal',
          data: chartData.map(item => item.weekly_movement)
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
