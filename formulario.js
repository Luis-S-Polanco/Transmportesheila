<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="formulario.css">
</head>

<body>
    <!-- Contenedor principal -->
    <div class="container">

        <div class="contenedor">
            <img src="imagen/logo sheila.jpeg" alt="icono" id="icono">
        </div>

        <h4><i class="fas fa-envelope"></i> Estimado cliente, favor llenar la plantilla para completar su reservación.  </h4>
        <!-- Agregado un icono -->
        <form id="contact-form">

        
            
                <!-- Sección de Datos del Solicitante -->
            <div class="form-section">
                
                <label for="nombre_solicitante">Nombre  del solicitante :</label> <span id="error-message-nombre_solicitante" class="error-message"></span>
                <br>
                <input type="text" id="nombre_solicitante" name="nombre_solicitante" required>
            </div>


            <!-- Contacto del solicitante -->  

                <label for="contacto_solicitante">Contacto del solicitante:</label><span id="error-message-contacto_solicitante" class="error-message"> </span>
                <br>
                <input type="tel" id="contacto_solicitante" name="contacto_solicitante" required>

                <!-- agregar al Jc esto -->
                  
                <label for="correo_solicitante">Correo del solicitante:</label> <span id="error-message-correo_solicitante" class="error-message"></span>
                <br>
                <input type="email" id="correo_solicitante" name="correo_solicitante" required>


                <!-- Sección de Tipo de documento -->
            <div class="form-section">
                
                <label for="tipo_documento">Tipo de documento:</label><span id="error-message-tipo_documento" class="error-message"></span>
                <select id="tipo_documento" name="tipo_documento" required>
                    <option value="vacio">Seleccione un tipo de documento </option>
                    <option value="RNC">RNC</option>
                    <option value="cedula">Cédula</option>
                    <option value="pasaporte">Pasaporte del solicitante</option>
                </select>


            </div>
                
                <!-- Agregar Jc-->
                
                <label for="informacion_documento">  Redactar documento:</label><span id="error-message-informacion_documento" class="error-message"> </span>
                <br>
                <input type="number" id="informacion_documento" name="informacion_documento" required>



                  <!-- Agregar Jc-->

                <label for="nombre_empresa">Nombre de la empresa  :</label> 
                <br>
                <input type="text" id="nombre_empresa" name="nombre_empresa" required>

                  
            

            
                <!-- la información de cada pasajero -->
                
                <div class="form-section">
                    <label for="nombre_pasajero">Nombre del pasajero :</label> <span id="error-message-nombre_pasajero" class="error-message"> </span>
                    <br>
                    <input type="text" id="nombre_pasajero" name="nombre_pasajero" required>

                    <label for="telefono_pasajero">Contacto  del  pasajero:</label><span id="error-message-telefono_pasajero" class="error-message"> </span>
                    <br>
                    <input type="tel" id="telefono_pasajero" name="telefono_pasajero" required>
                </div>

                
                <div class="form-section">
                    <label for="nombre_pasajero2">Nombre del representante:</label> 
                    <input type="text" id="nombre_pasajero2" name="nombre_pasajero2" required>

                    <label for="telefono_pasajero2">Contacto del  representante:</label><span id="error-message-telefono_pasajero2" class="error-message"> </span>
                    <br>
                    <input type="tel2" id="telefono_pasajero2" name="telefono_pasajero2" required>
                </div>

               
            <!-- Sección de Tipo de Servicio -->
                <div class="form-section">
                    
                    <label for="tipo_servicio">Tipo de servicio:</label><span id="error-message-tipo_servicio" class="error-message"></span>
                    <select id="tipo_servicio" name="tipo_servicio" required>
                        <option value="vacio">Seleccione un tipo de servicio </option>
                        <option value="ida_vuelta">Ida y vuelta (el mismo día)</option>
                        <option value="traslado">Traslado</option>
                        <option value="a_disposicion">A disposición</option>
                    </select>
                </div>

                <!-- Sección de Fecha y Hora -->
                <div class="form-section">
                   
                    <label for="fecha_del_servicio"> Fecha del servicio :</label> <span id="error-message-fecha_del_servicio" class="error-message"> </span>
                    <br>
                    <input type="date" id="fecha_del_servicio" name="fecha_del_servicio" required>

                    <label for="hora_ida">Hora del servicio :</label><span id="error-message-hora_ida" class="error-message"> </span>
                    <br>
                    <input type="time" id="hora_ida" name="hora_ida" required>

                
                </div>

                <div id="seccion_regreso" style="display:none;">
                    <label for="fecha_regreso">Fecha de regreso:</label>
                    <input type="date" id="fecha_regreso" name="fecha_regreso">

                    <label for="hora_regreso">Hora de regreso :</label>
                    <input type="time" id="hora_regreso" name="hora_regreso" required>
                </div>

                <!-- Sección de Dirección -->
                <div class="form-section">
                   
                    <label for="lugar_recogida">Lugar de recogida :</label> <span id="error-message-lugar_recogida" class="error-message"> </span>
                    <br>
                    <input type="text" id="lugar_recogida" name="lugar_recogida" required>
                    <span id="error-message-lugar_recogida" class="error-message"> </span>
                    <br>

                    <label for="lugar_destino">Lugar de destino :</label><span id="error-message-lugar_destino" class="error-message"> </span>
                    <br>
                    <input type="text" id="lugar_destino" name="lugar_destino" required>
                </div>

                <!-- Tiene parada  -->
                <div class="form-section">
                    
                    <label for="requiere_paradas">¿Requiere paradas?:</label>  <span id="error-message-requiere_paradas" class="error-message"> </span>
                    <select id="requiere_paradas" name="requiere_paradas" required>
                        <option value="vacio">Seleccione si requiere alguna paradas </option>
                        <option value="si_parada">Si</option>
                        <option value="no_parada">No</option>
                          
                    </select>
                </div>
                <br>





                <!-- Sección de Paradas  -->
                <div id="seccion_paradas" style="display:none;">
                
                    <label for="paradas">Seccion de comentariós, paradas dirección exacta:</label> <span id="error-message-paradas" class="error-message"> </span>
                    <textarea id="paradas" name="paradas" rows="4"></textarea>
                </div>

                <!-- Sección de Cantidad -->
                <div class="form-section">
                    
                    <label for="cantidad_maletas">Cantidad de maletas:</label> <span id="error-message-cantidad_maletas" class="error-message"> </span>
                    <input type="number" id="cantidad_maletas" name="cantidad_maletas" required>

                    <label for="cantidad_buses">Cantidad de buses:</label>
                    <input type="number" id="cantidad_buses" name="cantidad_buses" required>
                </div>

                <!-- Sección Numero de vuelo -->
                <div class="form-section">
                   
                    <label for="numero_vuelo">Número de vuelo (si aplica):</label>
                    <input type="text" id="numero_vuelo" name="numero_vuelo">
                </div>
                        <!-- Sección de Datos del Pasajero -->


                <div class="form-section">
                   
                   <!-- Sección de Datos del Pasajero -->

                        <label for="cantidad_pasajeros">Cantidad de pasajeros  :</label>  <span id="error-message-cantidad_pasajeros" class="error-message"> </span>
                            <br>
                         <input type="number" id="cantidad_pasajeros" name="cantidad_pasajeros" required>
            
                </div> 

                
                <br>

                

                        <!-- Sección de Método de Pago -->
                        <div class="form-section">
                                     
                            <label for="metodo_pago">Método de pago que desea utilizar:</label> <span id="error-message-metodo_pago" class="error-message"></span>
                            <select id="metodo_pago" name="metodo_pago" required>
                                <option value="vacio">Seleccione un método de pago</option>
                                <option value="Depósito y/o Transferencia">Depósito y/o transferencia</option>
                                <option value="Tarjeta de Débito/Crédito">Tarjeta de débito/crédito </option>
                                <option value="Link de pago "> Link de pago</option>
                            </select>
                        </div>

                        <!-- Sección de Método de comprobante  -->
                            <!-- falta el codigo de js  -->



                        <!-- Sección de Recepción de factura   -->
                            <!-- falta el codigo de js  -->
                            <div class="form-section">
                                                
                                <label for="recepción_factura">Recepción de factura  :</label> <span id="error-message-recepción_factura" class="error-message"></span>
                                <select id="recepción_factura" name="recepción_factura" required>
                                    <option value="vacio">Seleccione un tipo de recepción de factura</option>
                                    <option value="Correo electrónico">Correo electrónico </option>
                                    <option value="Física"> Física </option>
                                    <option value="WhatsApp"> WhatsApp </option>
                                </select>
                            </div>



                    <label for="comentario_recepción de factura "> Recepción de factura  comentario   </label>
                    <textarea id="comentario_recepción de factura " name="comentario_recepción de factura " rows="4"></textarea>


                    <h5></h5>
                    <h6>

                        <span><a href="terminos_y_condiciones.html" onclick="abrirVentanaEmergente(event)">Términos y Condiciones</a></span>
                        <span><label for="aceptoCheckboxinicio">Acepto los términos y condiciones</label></span>
                        <span><input type="checkbox" id="aceptoCheckboxinicio"></span>
                    </h6>
                    

                        <!-- Botones de envío por correo y WhatsApp -->
                        <div class="form-section button-section">
                            <button type="button" onclick="validarCampos(), verificarAceptacionInicio()" id="enviar-correo" class="button">Enviar por Correo</button>
                            <button type="button" onclick="validarCampos(), verificarAceptacionInicio()"  id="enviar-whatsapp" class="button">Enviar por WhatsApp</button>
                        </div>




        </form>   
            
</div>   <!-- Contenedor principal -->  

                        
            
        

    <script src="formulario.js"></script>

    
</body>

</html>
