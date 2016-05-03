$('#lista').on("dblclick", "li", function(){
	
	$(this).animate({'margin-left':'+=200'}, function(){
		
		$(this).remove();
		
	});
	
});

$('#botao-adiciona').click(function(){
	
	var texto = $('#treinamento').val();
	$('<li>').text(texto).css({'color':'blue', 'background-color':'lightgrey'}).appendTo('#lista');
	
});

$('#botao-atualiza').click(function(){
	
	$.get('http://mirrorfashion.caelum.com.br/treinamentos', function(retorno){
		
		$.each(retorno.treinamentos, function(){
			
			var treinamento = this;
			$('<li>').css('color', 'green').text(treinamento.nome).appendTo('#lista');
			
		});
		
	}, 'jsonp');

});