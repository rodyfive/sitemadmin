$(document).ready(function(){
	$('.modal').modal();
    $('select').material_select();
	buscar_datos();
	 $("#identificacion1").focus();
	 $("#nombre1").focus();
	 $("#apellidos1").focus();
	 $("#direccion1").focus();
	 $("#telefono_11").focus();
	 $("#telefono_21").focus();

		
})

function buscar_datos(consulta){
	$.ajax({
		url:'modulos/cliente/buscar.php',
		type: 'POST',
		//dataType: 'html',
		data: {consulta: consulta},
	})
	.done(function(respuesta){
		//alert(respuesta);
		$('#datos').html(respuesta);
	})
	.fail(function(){
		console.log("error");
	})
}
$(document).on('keyup', '#caja_busqueda', function(){
	var valor = $(this).val();
	if (valor != "") {
		buscar_datos(valor);
	}else{
		buscar_datos();
	}
})

function insertar(){
	setTimeout("document.location=document.location");
	$('#principal form').on('submit',function(e){

		e.preventDefault();
		$.ajax({
		url: 'modulos/cliente/insertar.php',
		type: 'POST',
		dataType:'json',
		data: $('#principal form').serialize(),
	})
		.done(function(respuesta){
		alert(respuesta);
	})	
	})

}

function mostrar(id){
	var i = id;
		$.ajax({
		url: 'modulos/cliente/llenar_formulario.php',
		type: 'POST',
		data:{id_cliente:i},
		})
		.done(function(respuesta){
		$('#r').html(respuesta);
	})	
}

function editar(id){
	setTimeout("document.location=document.location");
	var i = id;
	var ide = document.getElementById("identificacion1").value
	var nom = document.getElementById("nombre1").value
	var ape = document.getElementById("apellidos1").value
	var sex = document.getElementById("sexo1").value
	var dire = document.getElementById("direccion1").value
	var tel1 = document.getElementById("telefono_11").value
	var tel2 = document.getElementById("telefono_21").value
	$('#r form').on('submit',function(e){
		e.preventDefault();
		$.ajax({
		url: 'modulos/cliente/editar.php',
		type: 'POST',
		data:{id_cliente:i,identificacion:ide,nombre:nom,apellidos:ape,sexo:sex,direccion:dire,telefono_1:tel1,telefono_2:tel2},
		})
		.done(function(respuesta){
			alert (respuesta);
	})
	})	
}

function eliminar(id,identificacion){	
	if(confirm('¿Está seguro que desea eliminar el registro con identificación ' + identificacion +' ?')){
	setTimeout("document.location=document.location");
	var i = id;
		$.post("modulos/cliente/eliminar.php",{id_cliente:i});
		buscar_datos();
		$.ajax({
		url: 'modulos/cliente/eliminar.php',
		type: 'POST',
		})
		}
}

