var daDestaque = function(){
	//dentro do contexto procura o botão
	$(this).find('.remove-item').fadeIn();
	$(this).addClass('hovering');
};

var tiraDestaque = function(){
	$(this).find('.remove-item').fadeOut();	
	$(this).removeClass('hovering');
};

var umaPropaganda = function(){
	
	var propagandas = ["O que acha de comprar uma motocicleta?",
	                   "O que acha de comprar uma lancha?", 
	                   "O que acha de comprar um carro?", 
	                   "O que acha de comprar uma bicicleta?"];
	
	var posicao = Math.floor(propagandas.length * Math.random());
	var tr = $('<tr>').addClass('propaganda').append($('<td>'));
	tr.find('td').attr('colspan', 6).text(propagandas[posicao]);
	
	return tr;
	
};

var atualizaDados = function(){
	
	//escopo mais específico
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

var alternaPropagandas = function(event){
	event.preventDefault();
	//tempo opcional toggle(5000); milli
	$('.propaganda').fadeToggle();
	$('.alterna-propaganda').toggle();
}

var aposInicializado = function(){
	
	atualizaDados();
	$('.undo').click(undo);
	$('.remove-item').click(removeItem);
	
	$('.carrinho').each(function(){
		
		//pares, impares e a cada x ou ultimo elemento
		$(this).find('tr:nth-child(2n), tr:last').each(function(){
			umaPropaganda().insertAfter($(this));
		});
		
	});
	
	//parametro de entrada e saida do hover
	//$('tr).on('mouseenter', daDestaque);
	//$('tr').on('mouseleave', tiraDestaque);
	
	//os tr(filhos) que estão dentro do tbody
	$('.carrinho tbody tr').hover(daDestaque, tiraDestaque);
	
	$('.alterna-propaganda').click(alternaPropagandas);
	
};

var removeItem = function(event){
	
	event.preventDefault();
	
	var self = $(this);
	self.closest('tr').hide();
	
	atualizaDados();
	
};

$(aposInicializado);