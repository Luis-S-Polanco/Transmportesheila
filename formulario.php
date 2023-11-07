<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreSolicitante = $_POST["nombre_solicitante"];
    $apellidoSolicitante = $_POST["apellido_solicitante"];
    $correoSolicitante = $_POST["correo_solicitante"];
    $cedulaSolicitante = $_POST["cedula_solicitante"];
    $nombrePasajero = $_POST["nombre_pasajero"];
    $telefonoPasajero = $_POST["telefono_pasajero"];
    // Resto de campos...

    $to = "polancofreilin0@gmail.com";
    $subject = "Solicitud de Transporte";

    $message = "Nombre del solicitante: $nombreSolicitante $apellidoSolicitante\n";
    $message .= "Correo del solicitante: $correoSolicitante\n";
    $message .= "Cédula del solicitante: $cedulaSolicitante\n";
    $message .= "Nombre del pasajero: $nombrePasajero\n";
    $message .= "Teléfono del pasajero: $telefonoPasajero\n";
    // Resto de campos...

    $headers = "From: $correoSolicitante";
    if (mail($to, $subject, $message, $headers)) {
        echo "Correo enviado con éxito. Gracias por tu solicitud.";
    } else {
        echo "Error al enviar el correo. Por favor, inténtalo de nuevo.";
    }
}
?>
