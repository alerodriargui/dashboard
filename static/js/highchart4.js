$(document).ready(function() {
  function updateChart(numRows) {
    $.ajax({
      url: '/get_data4?num_rows=' + numRows,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log("Datos recibidos: ", data);
  
        // Ordenar los datos por popularidad en orden descendente
        data.sort(function(a, b) {
          return b.popularity - a.popularity;
        });
  
        // Prepara los datos para Highcharts (círculo de quesos)
        var chartData = [];
  
        // Itera sobre los datos y agrega los puntos de datos al array
        for (var i = 0; i < data.length; i++) {
          fullName = data[i].artists + " - " + data[i].name;
          chartData.push({
            name: fullName,
            y: data[i].popularity,
          });
        }
  
        // Crea un gráfico de círculo de quesos (pie chart)
        Highcharts.chart('chart-container4', {
          chart: {
            type: 'pie' // Cambia el tipo de gráfico a 'pie'
          },
          title: {
            text: 'Popularidad de las Canciones'
          },
          series: [{
            name: 'Popularidad',
            data: chartData
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
  }


  $('#update-data').on('click', function() {
    var numRows = $('#num-rows').val();
    updateChart(numRows);
  });

  // Inicializa el gráfico con el valor predeterminado (60 filas)
  updateChart(60);
  });

  