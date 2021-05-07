var agora = new Date();
var hora = agora.getHours();
var hoje = agora.getDay();
if (hora < 5) {
  console.log("Boa madrugada");
} else if (hora < 12) {
  console.log("Bom Dia");
} else if (hora <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
switch (hoje) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-Feira");
    break;
  case 2:
    console.log("Terça-Feira");
    break;
  case 3:
    console.log("Quarta-Feira");
    break;
  case 4:
    console.log("Quinta-Feira");
    break;
  case 5:
    console.log("Sexta-Feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log('[ERRO] Dia inválido')  
}

console.log(`Agora são ${hora} horas`)
