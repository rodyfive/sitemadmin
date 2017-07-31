$(document).ready(function(){
    $('.cmb').material_select();
    $('#cliente').select2();
    $('.datepicker').pickadate({
    // The title label to use for the month nav buttons
        labelMonthNext: 'Mes siguiente',
        labelMonthPrev: 'Mes anterior',

// The title label to use for the dropdown selectors
        labelMonthSelect: 'Selecciona un mes',
        labelYearSelect: 'Selecciona un año',

// Months and weekdays
        monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
        weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],

// Materialize modified
        weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Cerrar',
    closeOnSelect: false // Close upon selecting a date,
  });
});
var cont=0;
function añadir(){
		var cliente = document.getElementById("cliente").options[document.getElementById("cliente").selectedIndex].text
		var tipo_prenda = document.getElementById("tipo_prenda").options[document.getElementById("tipo_prenda").selectedIndex].text
		var precio = document.getElementById("precio").value
		//var estado_detalle = document.getElementById("estado_detalle").options[document.getElementById("estado_detalle").selectedIndex].text
		var descripcion = document.getElementById("descripcion").value
        cont++;
        var fila='<tr id="fila'+cont+'"><td>'+cont+'</td><td><div class="col s2"><a id="fila'+cont+'" class="red btn" onclick="remover(this.id)" > <i class="material-icons red tiny">remove</i></a></div></td><td>'+cliente+'</td><td>'+tipo_prenda+'</td><td>Por realizar</td><td>'+descripcion+'</td><td class="precio">'+precio+'</td></tr>';
        $("#tabla").append(fila);

        $(".limpiar").each(function(){ 
            $($(this)).val('');
         });
          reordenar()

          if (fila != null) {
              $('#envio').html('<br><div class="col s4 offset-s5" id="n"><button class="modal-action modal-close waves-effect green btn-flat " onclick="insertar();"  ">Realizar orden</button></div>');
          }else{
           document.getElementById("n").style.display="none";
           }

}
    function remover(fila_id){
    $("#"+fila_id).remove()
    reordenar()
}
    
    function reordenar(){
        var num=1;
        $("#tabla tbody tr").each(function(){
            $(this).find('td').eq(0).text(num);
            num++;
        })
    }

    function insertar(){
        
    }