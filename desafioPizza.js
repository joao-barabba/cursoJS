var p = 8// Pizza inteira recebe 8 pedaços
var pr = p// Pizza restante recebe Pizza
    while(pr>0){//Enquanto PR for maior que zero ele executa e diminui 1 no PR
        pr--
        console.log(`Ainda faltam ${pr}`)
    } 
    console.log(`Acabou a Pizza :(`)