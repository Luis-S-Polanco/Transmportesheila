// validad lo campo en blanco que debe esta lleno

function validarCampos() {
    const campos = ["nombre_solicitante", "apellido_solicitante", "correo_solicitante", "cedula_solicitante", "cantidad_pasajeros", "telefono_pasajero", "nombre_pasajero", "fecha_ida", "hora_ida", "lugar_recogida", "lugar_destino", "tipo_servicio", "metodo_pago"];
    let hayError = false;
    let primerCampoVacio;

    campos.forEach(campo => {
        const valorCampo = document.getElementById(campo).value;
        const mensajeErrorElement = document.getElementById(`error-message-${campo}`);

        if (valorCampo.trim() === "") {
            const campoNombre = campo.replace('_', ' ');
            mensajeErrorElement.textContent = `*Favor de llenar el campo '${campoNombre.charAt(0).toUpperCase() + campoNombre.slice(1)}'.`;
            mensajeErrorElement.style.display = "inline";
            hayError = true;

            if (!primerCampoVacio) {
                primerCampoVacio = campo;
            }
        } else {
            mensajeErrorElement.textContent = "";
            mensajeErrorElement.style.display = "none";
        }
    });

    const tipoServicio = document.getElementById("tipo_servicio").value;
    const mensajeErrorTipoServicio = document.getElementById("error-message-tipo_servicio");

    if (tipoServicio === "vacio") {
        mensajeErrorTipoServicio.textContent = "*Favor de seleccionar un tipo de servicio.";
        mensajeErrorTipoServicio.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorTipoServicio.textContent = "";
        mensajeErrorTipoServicio.style.display = "none";
    }

    const metodoPago = document.getElementById("metodo_pago").value;
    const mensajeErrorMetodoPago = document.getElementById("error-message-metodo_pago");

    if (metodoPago === "vacio") {
        mensajeErrorMetodoPago.textContent = "*Favor de seleccionar un método de pago.";
        mensajeErrorMetodoPago.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorMetodoPago.textContent = "";
        mensajeErrorMetodoPago.style.display = "none";
    }

    if (hayError) {
        if (primerCampoVacio) {
            document.getElementById(primerCampoVacio).focus();
        }
        return false;
    } else {
        return true;
    }
}







document.getElementById("enviar-correo").addEventListener("click", function () {
    // Validar los campos antes de enviar el correo
    if (!validarCampos()) {
        return;
    }

    // Construir el mensaje con los datos del formulario
    let mensaje = "";

  // Obtener valores del Solicitante
const nombreSolicitante = document.getElementById("nombre_solicitante").value;
const apellidoSolicitante = document.getElementById("apellido_solicitante").value;
const correoSolicitante = document.getElementById("correo_solicitante").value;
const cedulaSolicitante = document.getElementById("cedula_solicitante").value;

// Obtener valores de la Cantidad de Pasajeros
const cantidadPasajeros = document.getElementById("cantidad_pasajeros").value;

// Obtener valores del Pasajero 1
const nombrePasajero1 = document.getElementById("nombre_pasajero").value;
const telefonoPasajero1 = document.getElementById("telefono_pasajero").value;

// Obtener valores del Pasajero 2
const nombrePasajero2 = document.getElementById("nombre_pasajero2").value;
const telefonoPasajero2 = document.getElementById("telefono_pasajero2").value;

// Obtener valores del Tipo de Servicio
const tipoServicio = document.getElementById("tipo_servicio").value;

// Obtener valores de la Fecha y Hora
const fechaIda = document.getElementById("fecha_ida").value;
const horaIda = document.getElementById("hora_ida").value;
const fechaRegreso = document.getElementById("fecha_regreso").value;
const horaRegreso = document.getElementById("hora_regreso").value;

// Obtener valores de la Dirección
const lugarRecogida = document.getElementById("lugar_recogida").value;
const lugarDestino = document.getElementById("lugar_destino").value;

// Obtener valores de las Paradas
const paradas = document.getElementById("paradas").value;

// Obtener valores de la Cantidad de Maletas y Autobuses
const cantidadMaletas = document.getElementById("cantidad_maletas").value;
const cantidadBuses = document.getElementById("cantidad_buses").value;

// Obtener valor del Número de Vuelo
const numeroVuelo = document.getElementById("numero_vuelo").value;

// Obtener valor del Método de Pago
const metodoPago = document.getElementById("metodo_pago").value;



    // Construir el mensaje con los datos recopilados
    mensaje += 
    
    `Datos del Solicitante
    Nombre del Solicitante: ${nombreSolicitante}
    Apellido del Solicitante: ${apellidoSolicitante}
    Correo del Solicitante: ${correoSolicitante}
    RNC, Cédula y/o Pasaporte del Solicitante: ${cedulaSolicitante}
    
    Datos del Pasajero
    Cantidad de Pasajeros: ${cantidadPasajeros}
    
    Pasajero 1:
    Nombre del Pasajero: ${nombrePasajero1}
    Teléfono del Pasajero: ${telefonoPasajero1}

    Pasajero 2:
    Nombre del Pasajero 2: ${nombrePasajero2}
    Teléfono del Pasajero 2: ${telefonoPasajero2}

    
    Tipo de Servicio: ${tipoServicio}

    Fecha de Ida: ${fechaIda}
    Hora de Ida: ${horaIda}

    Fecha de Regreso: ${fechaRegreso}
    Hora de Regreso: ${horaRegreso}

    Lugar de Recogida: ${lugarRecogida}
    Lugar de Destino: ${lugarDestino}

    Paradas: ${paradas}

    Cantidad de Maletas: ${cantidadMaletas}
    Cantidad de Buses: ${cantidadBuses}
    Número de Vuelo: ${numeroVuelo}

    Método de Pago: ${metodoPago}


    `;


        

    

    const mensajeCodificado = encodeURIComponent(mensaje);
    const enlaceCorreo = `mailto:polancofreilin0@gmail.com?subject=Solicitud de Reservación&body=${mensajeCodificado}`;

    // Abrir el cliente de correo con el mensaje prellenado
    window.location.href = enlaceCorreo;
});
