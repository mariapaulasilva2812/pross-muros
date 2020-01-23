/**
 * Clase que contiene los metodos que dan funcionalidad a la interfaz.
 * @author Cristobal Alvarez
 * @version 1.0
*/

var i_Index = (function($, window, document, undefined)
{
	'use strict';
	/**
	 * Constructor de la clase.
	 *
	 * @return void
    */
	function Index(data)
	{
    }

    /**
	 * Inicializa el despliegue de la interfaz.
	 *
	 * @author Cristobal Alvarez
	 * @since 05-10-2017
	 * @version 1.0
	 * @param:
	 *
	 * @return void
	*/
	Index.prototype.init2 = function()
	{
        this.eventoClickEnviarConsultas({});
        this.counterUpInitiation({});
    }

    /**
	 * Metodo que ingresa Celular
	 *
	 * @author Cristobal Alvarez
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.counterUpInitiation = function()
	{
        $('.counter').counterUp();
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.eventoClickEnviarConsultas = function(data)
	{
		var _this = this;
		$("#btnEnviarConsulta").on('click', function(){
			_this.enviarConsultas();
		})
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.enviarConsultas = function()
	{
		var dataSend = {
			nombre : $("#txNombre").val(),
			correo : $("#txtEmail").val(),
			telefono : $("#txtTelefono").val(),
			consulta : $("#txtMensaje").val()
        }

		$.ajax({
			url: "Correo.php",
			method: "POST",
			dataType: "JSON",
			data: dataSend,
			success: function(data)
			{
				if(data.Success)
				{
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Listo!',
						text: 'Tu consulta ha sido enviada.',
						showConfirmButton: false,
						timer: 1500
					})
					$("#txNombre").val('');
					$("#txtEmail").val('');
					$("#txtTelefono").val('');
					$("#txtMensaje").val('');
				}
				else
				{
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: data.mensaje
					})
				}
			}
		});
	}

    return(Index);
})(jQuery, window, document);