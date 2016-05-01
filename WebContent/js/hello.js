$('#botao-copiar').on("click", function(){

	var nome = $('#campo-nome').val();
	
	$('#texto-copiado').text(nome);

});

