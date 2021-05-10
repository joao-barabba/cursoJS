function verifica() {
  var data = new Date(); //data atual
  var ano = data.getFullYear(); //Aqui var ano recebe somente os números do ano atual
  var fano = document.getElementById("txtano"); // var fano pega o elemento ano de nascimento
  var res = document.getElementById("res"); // Seleciona o elemento onde irá aparecer a foto
  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] Preencha as informações corretamente.");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 12) {
        //Criança
        img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 18){
            //Jovem
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-adulto-m.png')
        } else{
            //Idoso
            img.setAttribute('src', 'foto-idoso-m.png')
        }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 12) {
        //Criança
        img.setAttribute('src', 'foto-bebe-f.png')
        } else if (idade < 18){
            //Jovem
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-adulto-f.png')
        } else{
            //Idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
