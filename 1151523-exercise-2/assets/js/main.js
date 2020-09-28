/** @format */

$("#selh2").click(function(event){
	$("#contenedor1").load('./../components/contacto.html');
 });
 
 
   $("#selh1").click(function(event){
   $("#contenedor1").load('./../components/partidos.html');
 });
 
 
   $("#selh").click(function(event){
   $("#contenedor1").load('./../components/inicio.html');



// $(() => {
// 	$('#selh1').click(() => {
// 		var url = './../components/seleccion.html';
// 		$.ajax({
// 			type: 'POST',
// 			url: url,
// 			data: $('#contenedor1').serialize(),
// 			success: (data) => {
// 				$('#contenedor1').html(data);
// 			},
// 		});
// 		return false;
// 	});
// });
