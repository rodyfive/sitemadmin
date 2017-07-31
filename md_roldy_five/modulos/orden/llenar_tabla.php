<?php 
//echo $_POST["cliente"];
$cliente=$_POST["cliente"];
$tipo_prenda=$_POST["tipo_prenda"];
$estado_detalle=$_POST["estado_detalle"];
$precio=$_POST["precio"];
	include "../../conexion.php";
	//$id_cliente = $_POST['id_cliente'];
	//$id ="";
	$salida="";
	$identificacion="";
	$nombre="";
	$apellidos="";
	$descripcion_tipo_prenda="";
	$descripcion_estado="";
	$sql="SELECT * FROM cliente WHERE id = '$cliente'";
	$cs=mysqli_query($conn,$sql);
		while($resul=mysqli_fetch_array($cs)){
			$nombre=$resul[2];
			$apellidos=$resul[3];
			}

	$sql="SELECT * FROM tipo_prenda WHERE id = '$tipo_prenda'";
	$cs=mysqli_query($conn,$sql);
		while($resul=mysqli_fetch_array($cs)){
			$descripcion_tipo_prenda=$resul[1];
			}

	$sql="SELECT * FROM estado WHERE id = '$estado_detalle'";
	$cs=mysqli_query($conn,$sql);
		while($resul=mysqli_fetch_array($cs)){
			$descripcion_estado=$resul[1];
			}

	$salida.="<table class='striped responsive-table' border='1'>
		<thead>  
    <tr>
    	<th style='width:200px;'>Opciones</th>
        <th>Nombre</th>
        <th>Tipo de prenda</th>
        <th>Estado de prenda</th>
        <th>Precio</th>
    </tr>
    </thead><tbody>";
    	
    		$salida.="
				<tr >
					<td>
						<div class='row'>
							<div class='col s5 '><a id='borrar' class='red btn' onclick='eliminar(".$cliente.");' > <i class='material-icons red tiny'>clear</i></a></div>
					</td>
					<td >".$nombre. " </td>
					<td>".$descripcion_tipo_prenda."</td>
					<td>".$descripcion_estado."</td>
					<td>".$precio."</td>
				</tr>";
    
    	$salida.="</tbody></table>";
			
			echo $salida;

 ?>