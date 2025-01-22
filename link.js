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

const audioPlayer = document.getElementById('player');

// Forçar reprodução do áudio quando a página carregar
window.addEventListener('load', () => {
  // Tenta reproduzir o áudio imediatamente
  audioPlayer.play().then(() => {
    // Quando a reprodução for bem-sucedida, remova o mudo
    audioPlayer.muted = false;
    audioPlayer.volume = 0.5; // Ajusta o volume para 50%
  }).catch(err => {
    console.log('Erro ao tentar iniciar o áudio:', err);
    // Exibe uma mensagem caso o áudio não possa ser reproduzido
    alert('Não foi possível reproduzir o áudio automaticamente. Verifique as configurações do navegador.');
  });
});
