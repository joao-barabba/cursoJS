function contar() {
let ini=document.getElementById('txt1')
let fim=document.getElementById('txt2')
let passo=document.getElementById('txt3')
let contando= document.querySelector('div.contando')
  
  
  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
   contando.innerHTML = '[ERRO]Faltando informações. Tente novamente.'
  } else {
    contando.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
      alert('Passo inválido, considerando PASSO 1')
      p= 1
    }
    if(i < f){// Contagem Crescente
      for(let c= i ; c <= f; c <= p ){
        contando.innerHTML += `${c} \u{1F449}`
      }
      contando.innerHTML += `\u{1F3C1}`
    } else{//Contagem Regressiva
        for(let c= i; c >= f; c -= p){
          contando.innerHTML += `${c} \u{1F449}`
        }
    }
        contando.innerHTML += `\u{1F3C1}`     
  }
}
