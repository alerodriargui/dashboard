<?php
// Conexión a la base de datos
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "misdatos";

// Crea una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión a la base de datos fallida: " . $conn->connect_error);
}

// Realiza una consulta SQL para obtener datos
$sql = "SELECT nacionalidad, COUNT(*) AS total FROM datos_ejemplo GROUP BY nacionalidad";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Cierra la conexión a la base de datos
$conn->close();

// Devuelve los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
