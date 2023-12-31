    $(document).ready(function() {
        // Funcion para mostrar un gráfico en específico o todos
        $("#chart-select").change(function() {
        var selectedChart = $(this).val();
        $(".chart-containerA, .chart-containerB, .chart-containerC, .chart-containerD").hide();
        switch (selectedChart) {
            case "todos":
            $(".chart-containerA, .chart-containerB, .chart-containerC, .chart-containerD").fadeIn('slow');
            break;
            case "grafica1":
            $(".chart-containerA").fadeIn('slow');
            break;
            case "grafica2":
            $(".chart-containerB").fadeIn('slow');
            break;
            case "grafica3":
            $(".chart-containerC").fadeIn('slow');
            break;
            case "grafica4":
            $(".chart-containerD").fadeIn('slow');
            break;
            default:
            break;
        }
        });
    });


    document.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        document.getElementById('update-data').click(); 
      }
    });
