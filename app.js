/**
 * forEach -> ele envia "produtos" que estao dentro da classe/variavel, EX: --produtos.forEach(mostrarProdutos)--
 * Array: é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo (como números ou strings), acessíveis por meio de um índice
 */
import funcionario from './funcionario.json' with {type:'json'}

async function exibirDados() {
    try {
      const resposta = await fetch('./funcionario.json');
      const funcionarios = await resposta.json();
      funcionarios.forEach(criarCardFuncionario);
    } catch (erro) {
      console.error('Erro ao carregar os dados dos funcionários:', erro);
    }
  }
  
  function criarCardFuncionario(funcionario) {
    const funcionariosContainer = document.getElementById('funcionarios');
  
    const card = document.createElement('div');
    card.classList.add('card-funcionario');
  
    // Imagem
    const img = document.createElement('img');
    img.src = funcionario.imagem; // o JSON deve ter um campo "imagem"
    img.alt = funcionario.nome;
  
    // Nome
    const nome = document.createElement('h3');
    nome.textContent = funcionario.nome;
  
    // Cargo
    const cargo = document.createElement('p'); // corrigido: era createComment!
    cargo.textContent = funcionario.cargo;
  
    // Montar o card
    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(cargo);
  
    // Adicionar ao container
    funcionariosContainer.appendChild(card);
  }
  
  // Chamar a função principal
  exibirDados();
  