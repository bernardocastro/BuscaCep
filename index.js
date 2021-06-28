function buscaCep(cep){
    const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(urlCep)
    .then(response => response.json())
    .then( data => {
      console.log('Response: ', data)
  
      document.querySelector('.bairro').textContent = data.bairro;
      document.querySelector('.logradouro').textContent = data.logradouro;
      document.querySelector('.localidade').textContent = data.localidade;
      document.querySelector('.uf').textContent = data.uf;
    })
} 
  
  const btnCep = document.querySelector('.btnCep') 
  btnCep.addEventListener('click', function(){
    const inputCep = document.querySelector('.inputCep').value
    buscaCep(inputCep);
  })