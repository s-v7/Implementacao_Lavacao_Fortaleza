/*Script de Controle Página Lavação Fortaleza */

const lista_Clientes = [];

function cadastra() {
	var nome_Cliente;
	var tipo_Veiculo;
	var tipo_Lavagem;
	var tipo_Pagamento;
	var contato_Cliente;

	var nome_Cliente = document.getElementaById("nome").value;
	var tipo_veiculo = document.getElementById("tipoveiculo").value;
	var tipo_lavagem = document.getElementById("tipoLavagem").value;
	var tipo_Pagamento = document.getElementById("pagemento").value;
	var contato_Cliente = document.getElementById("contato").value;

	lista_Clientes.push(nome_Cliente,tipo_Veiculo,tipo_Lavagem,tipo_Pagamento,contato_Cliente);

	document.getElementById("Cadastra").innerText = lista_Clientes;

}

/***************** Fim da função Cadastro **************/


function mostra_Clientes(lista_Clientes){
	
	let i;

	for(let i of lista_Cliente){
		document.write(i);
	}


