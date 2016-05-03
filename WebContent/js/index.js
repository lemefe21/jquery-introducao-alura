var aposInicializado = function(){
	var itens = $('.item-total');
	var quantidade = $('.item-quantidade');
	var total = 0;
	var totalItens = 0;
	
	for(var i = 0; i < itens.length; i++){
		
		var item = $(itens[i]).text();
		var valor = parseFloat(item);
		total += valor;
		
		var textoQuantidade = $(quantidade[i]).text();
        var quantidadeItem = parseFloat(textoQuantidade);
        totalItens += quantidadeItem;
		
	}
	
	console.log("Valor total " + total);
	
	$('#valor-total').text(total);
	$('#quantidade-itens').text(totalItens);
};

//toda função passada ao JQuery dessa maneira será 
//executada depois do carregamento da página
$(aposInicializado);