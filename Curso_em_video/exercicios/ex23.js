let amigo =  {nome: 'José', 
sexo: 'Masculino',
peso: 75, 
engordar(p=0){
    console.log(`Engordou`)
    this.peso += p // This chama peso do objeto
}}

amigo.engordar(10)
console.log (`${amigo.nome} pesa ${amigo.peso}`)