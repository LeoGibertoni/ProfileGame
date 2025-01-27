function copiarTexto() {
  const texto = "dorpzeira@gmail.com";
  const elementoTemporario = document.createElement("textarea");
  elementoTemporario.value = texto;
  document.body.appendChild(elementoTemporario);
  elementoTemporario.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporario);

  // Exibe a mensagem de "Copiado"
  const mensagem = document.querySelector(".copiado");
  mensagem.style.display = "block";
  
  // Remove a mensagem após 1 segundo
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 1000);
}

  // Espera o áudio carregar e desmuta o áudio depois de 1 segundo, em seguida, dá play
  window.onload = function() {
    var audio = document.getElementById('meuAudio');
    setTimeout(function() {
      audio.muted = false;  // Desmuta o áudio após 1 segundo
      audio.play();         // Reproduz o áudio após desmutar
    }, 1000); // Aguarda 1 segundo
  };