function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `<p> Agora são ${hora} horas./p>`;
  if (hora >= 6 && hora < 12) {
    img.src = "img/manha.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "img/tarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "img/noite.jpg";
    document.body.style.background = "#515154";
  }
}
