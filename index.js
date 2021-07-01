function buscaCep(cep) {
	document.querySelector('.erro').style.display = "none";

	const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
	fetch(urlCep)
		.then(response => response.json())
		.then(data => {
			desligarLoading();
			if (data.erro) {
				return exibeErro();
			}

			popularDados(data);
		})
}

function popularDados(data) {
	document.querySelector('.bairro').textContent = data.bairro;
	document.querySelector('.logradouro').textContent = data.logradouro;
	document.querySelector('.localidade').textContent = data.localidade;
	document.querySelector('.uf').textContent = data.uf;
}

const btnCep = document.querySelector('.btnCep')
btnCep.addEventListener('click', function () {
	ligarLoading();
	const inputCep = document.querySelector('.inputCep').value;
	buscaCep(inputCep);

	if (inputCep.length != 8) {
		alert("CEP inválido!")
		desligarLoading();
	} else if (response.ok == false) {
		alert("CEP não encontrado!")
	}
})

function desligarLoading() {
	const loader = document.querySelector('.loader').style.display = "none";
	const content = document.querySelector('.content').style.display = "block";
}

function ligarLoading() {
	const loader = document.querySelector('.loader').style.display = "inline-block";
	const content = document.querySelector('.content').style.display = "none";
}

function exibeErro() {
	const mensagem = document.querySelector('.erro').style.display = "inline-block";
	const content = document.querySelector('.content').style.display = "none";
}