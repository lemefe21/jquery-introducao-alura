var atualizaDados = function(){

	var itens = $('.item-total');
	var total = 0;
	
	for(var i = 0; i < itens.length; i++){
		var item = $(itens[i]).text();
		var valor = parseFloat(item);
		total += valor;
	}
	
	//console.log("Valor total " + total);
	//nesse ponto já realiza a atualização dos dados da página
	//por isso refatoramos para o método atualizaDados()
	$('#valor-total').text(total);
	$('#quantidade-itens').text(itens.length);
	
}

var aposInicializado = function(){
	
	atualizaDados();
	$('.remove-item').click(removeItem);
};

var removeItem = function(event){
	
	//previne o comportamento padrão do link de redireciona para uma página
	//nesse caso ela mesma
	event.preventDefault();
	
	//click - função de callback
	//this - link <a>, em objeto jquery $(this)
	//closest é o selector de self
	var self = $(this);
	self.closest('tr').remove();
	
	/*var atual = parseInt($('#quantidade-itens').text());
	var novaQuantidade = atual - 1;
	$('#quantidade-itens').text(novaQuantidade);
	var precoAtual = parseFloat($('#valor-total').text());
	var preco = parseFloat(self.closest('tr').find('.item-total').text());
	var precoFinal = precoAtual - preco;
	$('#valor-total').text(precoFinal);*/
	
	atualizaDados();
	
};

//toda função passada ao JQuery dessa maneira será 
//executada depois do carregamento da página
$(aposInicializado);