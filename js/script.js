function cadastro(numero){
   tabela = document.getElementById("tabela");
   let linha = tabela.insertRow(-1);
   let coluna1 = linha.insertCell(0);
   let coluna2 = linha.insertCell(1);
   let coluna3 = linha.insertCell(2);
   let coluna4 = linha.insertCell(3);
   if(numero === 1){
      let codCliente = document.getElementById('codCliente').value;
      let nomeCliente   = document.getElementById('nomeCliente').value;
      let idadeCliente = document.getElementById("idadeCliente").value;
      let cidadeCliente = document.getElementById("cidadeCliente").value;
      tabela = document.getElementById("tabela");
      coluna1.innerHTML = codCliente;
      coluna2.innerHTML = nomeCliente;
      coluna3.innerHTML = idadeCliente;
      coluna4.innerHTML = cidadeCliente;
   }else{
      if(numero === 2){
         let codProd = document.getElementById('codProd').value;
         let nomeProd   = document.getElementById('nomeProd').value;
         let quantidadeProd = document.getElementById("quantidadeProd").value;
         let valorProd = document.getElementById("valorProd").value;
         coluna1.innerHTML = codProd;
         coluna2.innerHTML = nomeProd;
         coluna3.innerHTML = quantidadeProd;
         coluna4.innerHTML = valorProd;
      }
   }
}
