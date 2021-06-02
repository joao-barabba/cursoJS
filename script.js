let valores = []; // Array vázia global
let res = document.querySelector(".res"); // Pegando a div res para imprimir na tela
let tab = document.getElementById("seltab"); //Pegando o elemento onde colocarei os números.

function adicionar() {
  // Function que irá adcionar o valor ao array
  let txtn = document.getElementById("txtn"); // Pegando o valor digitado pelo user
  let n = Number(txtn.value);// COnverter para number
  let item = document.createElement("option"); // Criando um option novo
  if (n > 0 && n <= 100) {
    //Condição para  o número ser de 1 a 100
    if (valores.indexOf(n) === -1) {
      valores.push(n); // Método push adciona o valor ao array
      item.text = `${n} Adicionado`;
      tab.appendChild(item); // Imprimindo na tela dentro o item que é um option

    }
  } else if (valores.indexOf(n) !== -1) {
    alert(`Valor ${n} já foi adicionado recentemente. Tente outro`);
  } else {
    alert("Número não está entre 1 e 100");
  }
  txtn.value = ""; // Limpo meu imput
  txtn.focus(); //já dou foco para próximo number
}

function verificar() {
  //let maior = Math.max.apply(null, valores); // Descobrindo o maior valor com menos linhas
  //let menor = Math.min.apply(null, valores); // Descobrindo o menor valor com menos linhas
  if (valores.length == 0) {
    alert("Nenhum valor foi encontrado, favor digite novamente!!!");
  } else {
    let maior = valores[0]
    let menor = valores[0] 
    let soma = 0;
    let media = 0;
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos]> maior)
            maior = valores[pos]
        else if(valores[pos]< menor)
        menor = valores[pos]    
    }
    media =soma / valores.length
    res.innerHTML = `<p>A quantidade de números é: ${
      valores.length
    }</p><br><p>O maior valor digitado foi:  ${maior}</p><br><p> O menor número digitado foi: ${menor}</p><br><p> A soma dos valores é: ${soma}</p><br><p>A Média das notas é: ${media}</p>`;
  }
}

function limpar(){
    res.innerHTML = ""
    tab.innerHTML = ""
    valores = []
}
