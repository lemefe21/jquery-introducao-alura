$('#lista').on("click", "li", function(){
	
	var texto = $(this).text();
	alert(texto);
	
});

$('#botao-adiciona').click(function(){
	
	var texto = $('#treinamento').val();
	$('<li>').text(texto).appendTo('#lista');
	
});