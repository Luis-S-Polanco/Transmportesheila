// Asigna el event listener al botón con el ID 'agregar-cotizaciones'
document.getElementById("agregar-cotizaciones").addEventListener("click", function () {
    const cantidadCotizaciones = document.getElementById("cantidad_cotizaciones").value;
    const CotizacionesInfoDiv = document.getElementById("cotizacion-mas");

    // Limpiar el contenido anterior
    CotizacionesInfoDiv.innerHTML = "";

    for (let i = 2; i <= cantidadCotizaciones; i++) {
        // Crear campos para cada cotización
        const cotizacionDiv = document.createElement("div");
        cotizacionDiv.innerHTML = `
        
        <h1>______________________________________________</h1>
        <h1>Cotización ${i}</h1>

         <!-- Sección de Datos del Pasajero -->
            <div class="form-section">
                <h2>Datos del Pasajero</h2>
                    <label for="cantidad_pasajeros${i}">Cantidad Pasajeros:</label><span id="error-message-cantidad_pasajeros" class="error-message"> </span>
                    <br>
                    <input type="number" id="cantidad_pasajeros${i}" name="cantidad_pasajeros${i}" required>
                
            </div>
            
            <!--  la información de cada pasajero -->
            <h4>Pasajero 1</h4>

            <div class = "form-section">
                <label for="nombre_pasajero${i}">Nombre del Pasajero:</label>  <span id="error-message-nombre_pasajero" class="error-message"> </span>
                <br>
                <input type="text" id="nombre_pasajero${i}" name="nombre_pasajero${i}" required>
               

                <label for="telefono_pasajero${i}">Teléfono del Pasajero:</label><span id="error-message-telefono_pasajero" class="error-message"> </span>
                <br>
                <input type="tel" id="telefono_pasajero${i}" name="telefono_pasajero${i}" required >
                

            </div>

            <!--  la información de cada pasajero -->
            <h4>Pasajero 2</h4>

            <div class = "form-section">  
                <label for="nombre_pasajero${i}">Nombre del Pasajero:</label>  <span id="error-message-nombre_pasajero" class="error-message"> </span>
                <br>
                <input type="text" id="nombre_pasajero${i}" name="nombre_pasajero${i}" required>
               

                <label for="telefono_pasajero${i}">Teléfono del Pasajero:</label><span id="error-message-telefono_pasajero" class="error-message"> </span>
                <br>
                <input type="tel" id="telefono_pasajero${i}" name="telefono_pasajero${i}" required >
                

            </div>

            
            
           <!-- Sección de Fecha y Hora -->
           <div class="form-section">
               <h2>Fecha y Hora</h2>
               <label for="fecha_ida${i}">Fecha de Ida:</label> <span id="error-message-fecha_ida" class="error-message"> </span>
               <br>
               <input type="date" id="fecha_ida${i}" name="fecha_ida${i}" required>
               

               <label for="hora_ida${i}">Hora de Ida (Formato 24h):</label><span id="error-message-hora_ida" class="error-message"> </span>
               <br>
               <input type="time" id="hora_ida${i}" name="hora_ida${i}" required >
               

               <label for="fecha_regreso${i}">Fecha de Regreso:</label>
               <input type="date" id="fecha_regreso${i}" name="fecha_regreso${i}">
               

               <label for="hora_regreso${i}">Hora de Regreso (Formato 24h):</label>
               <input type="time" id="hora_regreso${i}" name="hora_regreso${i}" required >
               
           </div>

           <!-- Sección de Dirección -->
           <div class="form-section">
               <h2>Dirección</h2>
               <label for="lugar_recogida${i}">Lugar de Recogida:</label>  <span id="error-message-lugar_recogida" class="error-message"> </span>
               <br>
               <input type="text" id="lugar_recogida${i}" name="lugar_recogida${i}" required>
               

               <label for="lugar_destino${i}">Lugar de Destino:</label><span id="error-message-lugar_destino" class="error-message"> </span>
               <br>
               <input type="text" id="lugar_destino${i}" name="lugar_destino${i}" required>
               
           </div>

           <!-- Sección de Cantidad  -->
           <div class="form-section">
               <h2>Cantidades de maletas y Autobuses  </h2>
               <label for="cantidad_maletas${i}">Cantidad de Maletas:</label>
               <input type="number" id="cantidad_maletas${i}" name="cantidad_maletas${i}" required>
               

               <label for="cantidad_buses${i}">Cantidad de Buses:</label>
               <input type="number" id="cantidad_buses${i}" name="cantidad_buses${i}" required>
           
             
           </div>
         <!-- Sección Numero de vuelo  -->
           <div class="form-section">
               <h2>Numero de  Vuelo </h2>
           
               <label for="numero_vuelo${i}">Número de Vuelo (Si Aplica):</label>
               <input type="text" id="numero_vuelo${i}" name="numero_vuelo${i}">

           </div>

           <!-- Sección de Paradas y Tipo de Servicio -->
           <div class="form-section">
               <h2>Paradas y Tipo de Servicio</h2>
               <label for="paradas${i}">Seccion de comentario ¿Paradas? ¿Dónde (dirección exacta)?:</label>
               <textarea id="paradas${i}" name="paradas${i}" rows="4"></textarea>

               <label for="tipo_servicio${i}">Tipo de Servicio:</label> <span id="error-message-tipo_servicio" class="error-message"> </span>
               <br>
               <select id="tipo_servicio${i}" name="tipo_servicio${i}">
                   <option value="vacio"></option>
                   <option value="ida_vuelta">Ida y vuelta el mismo día</option>
                   <option value="traslado">Traslado</option>
                   <option value="a_disposicion">A disposición</option>
               </select>
           </div>

           <!-- Sección de Método de Pago -->
           <div class="form-section">
               <h2>Método de Pago</h2>
               <label for="metodo_pago${i}">Método de Pago que desea utilizar:</label>
               <select id="metodo_pago${i}" name="metodo_pago${i}" required>
                   <option value="Depósito y/o Transferencia">Depósito y/o Transferencia</option>
                   <option value="Tarjeta de Débito/Crédito">Tarjeta de Débito/Crédito</option>
                   <option value="Link de pago">Link de pago</option>
               </select>
           </div>      
           
           <br>





            
            `;

        CotizacionesInfoDiv.appendChild(cotizacionDiv);
    }
});

// Asigna el event listener al elemento padre existente

// Boton para agregar mas de un pasajero
document.getElementById("agregar-pasajeros").addEventListener("click", function () {
    const cantidadPasajeros = document.getElementById("cantidad_pasajeros_contacto").value;
    const pasajerosInfoDiv = document.getElementById("pasajeros-info");

    // Limpiar el contenido anterior
    pasajerosInfoDiv.innerHTML = "";

    for (let i = 2; i <= cantidadPasajeros; i++) { 
        // Crear campos para cada pasajero
        const pasajeroDiv = document.createElement("div");
        pasajeroDiv.innerHTML = `<h4>Pasajero ${i}</h4>
            <label for="nombre_pasajero_${i}">Nombre del Pasajero:</label>
            <input type="text" id="nombre_pasajero_${i}" name="nombre_pasajero_${i}" required>
            <label for="telefono_pasajero_${i}">Teléfono del Pasajero:</label>
            <input type="tel" id="telefono_pasajero_${i}" name="telefono_pasajero_${i}" required>`;
        pasajerosInfoDiv.appendChild(pasajeroDiv);
    }
});

  // validad lo campo en blanco que debe esta lleno

function validarCampos() {
    const campos = ["nombre_solicitante", "apellido_solicitante", "correo_solicitante", "cedula_solicitante","cantidad_pasajeros", "telefono_pasajero","nombre_pasajero","fecha_ida", "hora_ida", "lugar_recogida","lugar_destino","tipo_servicio"]
    let hayError = false;

    campos.forEach(campo => {
        const valorCampo = document.getElementById(campo).value;
        const mensajeErrorElement = document.getElementById(`error-message-${campo}`);

        if (valorCampo.trim() === "") {
            const campoNombre = campo.replace('_', ' ');
            mensajeErrorElement.textContent = `*Favor de llenar el campo '${campoNombre.charAt(0).toUpperCase() + campoNombre.slice(1)}'.`;
            mensajeErrorElement.style.display = "inline";
            hayError = true;
        } else {
            mensajeErrorElement.textContent = ""; // Limpiar el mensaje de error si el campo está lleno
            mensajeErrorElement.style.display = "none";
            // Aquí puedes realizar acciones adicionales si el campo está lleno
        }
    });

    if (hayError) {
        // Puedes agregar un mensaje general o realizar acciones adicionales si hay algún error
    } else {
        // Puedes realizar acciones adicionales si todos los campos están llenos
    }
}


 // Boton para ennviar los input por correo

document.getElementById("enviar-correo").addEventListener("click", function () {
    // Validar que el campo de Lugar de Destino no esté vacío
    function validarCampos() {
        const campos = ["examen", "nota", "materia", "documento"];
        let hayError = false;
    
        campos.forEach(campo => {
            const valorCampo = document.getElementById(campo).value;
            const mensajeErrorElement = document.getElementById(`error-message-${campo}`);
    
            if (valorCampo.trim() === "") {
                mensajeErrorElement.textContent = `Favor de llenar el campo '${campo.charAt(0).toUpperCase() + campo.slice(1)}'.`;
                mensajeErrorElement.style.display = "inline";
                hayError = true;
            } else {
                mensajeErrorElement.textContent = ""; // Limpiar el mensaje de error si el campo está lleno
                mensajeErrorElement.style.display = "none";
                // Aquí puedes realizar acciones adicionales si el campo está lleno
            }
        })};

    // Recolectar los valores de los campos
    // ...

    // Crear el mensaje
    // ...

    // Enviar los datos por correo electrónico
    // ...
});

// Función para enviar por correo
function enviarCorreo() {
    const nombreSolicitante = document.getElementById("nombre_solicitante").value;
    const apellidoSolicitante = document.getElementById("apellido_solicitante").value;
    const correoSolicitante = document.getElementById("correo_solicitante").value;
    const cedulaSolicitante = document.getElementById("cedula_solicitante").value;
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

    const correoDestino = "polancofreilin0@gmail.com";
    const asunto = "Reserva formulario";
    window.location.href = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
}

 // Boton para ennviar los input por WhatsApp
document.getElementById("enviar-whatsapp").addEventListener("click", function () {
    // Validar que el campo de Lugar de Destino no esté vacío
    const lugarDestino = document.getElementById("lugar_destino").value;
    if (lugarDestino.trim() === "") {
        alert("Por favor, complete el campo 'Lugar de Destino'.");
        return;
    }

    // Recolectar los valores de los campos
    // ...

    // Crear el mensaje para WhatsApp
    // ...

    // Abrir WhatsApp con el mensaje prellenado
    // ...
});

function ajustarTamanio() {
    const anchoVentana = window.innerWidth;

    if (anchoVentana <= 600) {
        // Estilos para dispositivos pequeños (por ejemplo, teléfonos)
        document.body.style.fontSize = '16px';
        document.querySelector('.container').style.maxWidth = '60%';
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
// Función para enviar por WhatsApp


function enviarWhatsApp() {
    const nombreSolicitante = document.getElementById("nombre_solicitante").value;
    const apellidoSolicitante = document.getElementById("apellido_solicitante").value;
    const telefonoPasajero = document.getElementById("telefono_pasajero").value;
    const fechaIda = document.getElementById("fecha_ida").value;
    const horaIda = document.getElementById("hora_ida").value;
    const lugarRecogida = document.getElementById("lugar_recogida").value;
    const lugarDestino = document.getElementById("lugar_destino").value;
    const cantidadServicio = document.getElementById("cantidad_servicio").value;

    const mensajeWhatsApp = `**Datos del Solicitante**%0A
    Nombre del Solicitante: ${nombreSolicitante}%0A
    Apellido del Solicitante: ${apellidoSolicitante}%0A
    Teléfono del Pasajero: ${telefonoPasajero}%0A
    %0A
    **Fecha y Hora**%0A
    Fecha de Ida: ${fechaIda}%0A
    Hora de Ida: ${horaIda}%0A
    %0A
    **Dirección**%0A
    Lugar de Recogida: ${lugarRecogida}%0A
    Lugar de Destino: ${lugarDestino}%0A
    %0A
    **Cantidad de Servicio**%0A
    Cantidad de Cotizaciones: ${cantidadServicio}`;

    const numeroWhatsApp = "+1234567890";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`);
}

// Agregar eventos a los botones
document.getElementById("enviar-correo").addEventListener("click", enviarCorreo);
document.getElementById("enviar-whatsapp").addEventListener("click", enviarWhatsApp);

