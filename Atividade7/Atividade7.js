function jogar() {
    // Obtém a escolha do usuário
    var escolhaUsuario = parseInt(document.querySelector('input[name="opcao"]:checked').value);
  
    // Gera a escolha aleatória da máquina
    var escolhaMaquina = Math.floor(Math.random() * 3) + 1;
  
    // Define as opções em formato de texto para exibição
    var opcoes = ["Pedra", "Papel", "Tesoura"];
  
    // Exibe as escolhas do usuário e da máquina
    document.getElementById("escolhaUsuario").innerHTML = opcoes[escolhaUsuario - 1];
    document.getElementById("escolhaMaquina").innerHTML = opcoes[escolhaMaquina - 1];
  
    // Verifica quem ganhou
    if (escolhaUsuario == escolhaMaquina) {
      document.getElementById("resultado").innerHTML = "Empate!";
    } else if (escolhaUsuario == 1 && escolhaMaquina == 3 ||
               escolhaUsuario == 2 && escolhaMaquina == 1 ||
               escolhaUsuario == 3 && escolhaMaquina == 2) {
      document.getElementById("resultado").innerHTML = "Você ganhou!";
    } else {
      document.getElementById("resultado").innerHTML = "Você perdeu!";
    }
  }
    



