function tabuada(){// Função Tabuada
  let num = document.getElementById('txtn')//Pegando elemento no HTML
  let tab = document.getElementById('seltab')//Pegando elemento no HTML
  if(num.value.length == 0){//Lógica para caso o input esteja zerado
    alert('Por favor digite um número')
  }else{//Lógica caso no input tenha valor
    let n = Number(num.value)// Apenas o valor do input sendo convertido em NUMBER
    let c = 1// variavel contadora para o laço
    tab.innerHTML =''//Usado para limpar meu HTML a cada consulta
    while(c<=10){//Laço
      let item = document.createElement('option')// Criando item dinamicamente no HTML
      item.text = `${n} x ${c} = ${n*c}`// Iprimindo na tela e um pouco de lógica
      tab.appendChild(item)// Adciona a tela  
      c++//incrementa no contador até bater 10
    }
  }
    
}