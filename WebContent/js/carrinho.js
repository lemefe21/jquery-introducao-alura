var atualizaDados = function(){
	
	var carrinhos = $('.carrinho');
	
	carrinhos.each(function(){
		
		//função executada para cada carrrinho na pagina
		//cada iteração recebe um carrinho diferente
		var carrinho = $(this);
		
		var itens = carrinho.find('.item-total:visible');
		var total = 0;
		
		for(var i = 0; i < itens.length; i++){
			var item = $(itens[i]).text();
			var valor = parseFloat(item);
			total += valor;
		}
		
		carrinho.find('.valor-total').text(total);
		carrinho.find('.quantidade-itens').text(itens.length);
		
	});

}

var undo = function(){
	
	var carrinho = $(this).closest('.carrinho');
	carrinho.find('tr:visible').removeClass('recuperado');
	
	var trs = carrinho.find('tr:hidden');
	trs.addClass('recuperado').show();
	
	atualizaDados();
	
}

var aposInicializado = function(){
	
	atualizaDados();
	$('.undo').click(undo);
	$('.remove-item').click(removeItem);
};

var removeItem = function(event){
	
	event.preventDefault();
	
	var self = $(this);
	self.closest('tr').hide();
	
	atualizaDados();
	
};

$(aposInicializado);