document.getElementById("enviar-correo").addEventListener("click", function () {
    // Recolecta los valores de los campos
    const nombreSolicitante = document.getElementById("nombre_solicitante").value;
    const apellidoSolicitante = document.getElementById("apellido_solicitante").value;
    const correoSolicitante = document.getElementById("correo_solicitante").value;
    const cedulaSolicitante = document.getElementById("cedula_solicitante").value;

    // Otros campos
    const nombrePasajero = document.getElementById("nombre_pasajero").value;
    const telefonoPasajero = document.getElementById("telefono_pasajero").value;
    const fechaIda = document.getElementById("fecha_ida").value;
    const horaIda = document.getElementById("hora_ida").value;
    const fechaRegreso = document.getElementById("fecha_regreso").value;
    const horaRegreso = document.getElementById("hora_regreso").value;
    const lugarRecogida = document.getElementById("lugar_recogida").value;
    const lugarDestino = document.getElementById("lugar_destino").value;
    const cantidadPersonas = document.getElementById("cantidad_personas").value;
    const cantidadMaletas = document.getElementById("cantidad_maletas").value;
    const cantidadBuses = document.getElementById("cantidad_buses").value;
    const numeroVuelo = document.getElementById("numero_vuelo").value;
    const paradas = document.getElementById("paradas").value;
    const tipoServicio = document.getElementById("tipo_servicio").value;
    const metodoPago = document.querySelector('input[name="metodo_pago"]:checked').value;

    // Crear el mensaje
    const mensaje = `**Datos del Solicitante**%0A
    Nombre del Solicitante: ${nombreSolicitante}%0A
    Apellido del Solicitante: ${apellidoSolicitante}%0A
    Correo del Solicitante: ${correoSolicitante}%0A
    Cédula del Solicitante: ${cedulaSolicitante}%0A
    %0A
    **Datos del Pasajero**%0A
    Nombre del Pasajero: ${nombrePasajero}%0A
    Teléfono del Pasajero: ${telefonoPasajero}%0A
    %0A
    **Fecha y Hora**%0A
    Fecha de Ida: ${fechaIda}%0A
    Hora de Ida: ${horaIda}%0A
    Fecha de Regreso: ${fechaRegreso}%0A
    Hora de Regreso: ${horaRegreso}%0A
    %0A
    **Dirección**%0A
    Lugar de Recogida: ${lugarRecogida}%0A
    Lugar de Destino: ${lugarDestino}%0A
    %0A
    **Cantidad y Vuelo**%0A
    Cantidad de Personas: ${cantidadPersonas}%0A
    Cantidad de Maletas: ${cantidadMaletas}%0A
    Cantidad de Buses: ${cantidadBuses}%0A
    Número de Vuelo: ${numeroVuelo}%0A
    %0A
    **Paradas y Tipo de Servicio**%0A
    ¿Paradas? ¿Dónde (dirección exacta)?: ${paradas}%0A
    Tipo de Servicio: ${tipoServicio}%0A
    %0A
    **Método de Pago**%0A
    Método de Pago: ${metodoPago}`;

    // Envía los datos por correo electrónico a la dirección predeterminada
    const correoDestino = "polancofreilin0@gmail.com";
    const asunto = "Formulario de Contacto";
    window.location.href = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
});

document.getElementById("enviar-whatsapp").addEventListener("click", function () {
    // Recolecta los valores de los campos
    const nombreSolicitante = document.getElementById("nombre_solicitante").value;
    const apellidoSolicitante = document.getElementById("apellido_solicitante").value;
    const telefonoPasajero = document.getElementById("telefono_pasajero").value;

    // Mensaje prellenado para WhatsApp
    const mensajeWhatsApp = `¡Hola!%0A%0A**Datos de Contacto**%0A%0A
    Nombre del Solicitante: ${nombreSolicitante}%0A
    Apellido del Solicitante: ${apellidoSolicitante}%0A
    Teléfono del Pasajero: ${telefonoPasajero}%0A
    %0A
    ¡Gracias!`;

    // Abre WhatsApp con el mensaje prellenado
    window.open(`https://wa.me/+18094057978?text=${mensajeWhatsApp}`);
});
function ajustarTamanio() {
    const anchoVentana = window.innerWidth;

    if (anchoVentana <= 600) {
        // Estilos para dispositivos pequeños (por ejemplo, teléfonos)
        document.body.style.fontSize = '16px';
        document.querySelector('.container').style.maxWidth = '600px';
        document.querySelector('.container').style.padding = '10px';
    } else {
        // Estilos para dispositivos grandes (por ejemplo, PCs)
        document.body.style.fontSize = '20px';
        document.querySelector('.container').style.maxWidth = '1000px';
        document.querySelector('.container').style.padding = '30px';
    }
}

// Llama a la función para ajustar el tamaño cuando se carga la página y cuando se redimensiona la ventana.
ajustarTamanio();
window.addEventListener('resize', ajustarTamanio);

