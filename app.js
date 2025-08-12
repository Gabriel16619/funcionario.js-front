/**
 * autor: Gabriel Cavalcante
 * data: 12/08/2025
 * descrição: fazer com que os dados do js vao para o style
 * o que eu consegui fazer? aula-1: apenas uma parte do json e do css
 * versão: 1.0
 */

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
  
    // parte de imagem do json
    const img = document.createElement('img');
    img.src = funcionario.imagem; 
    img.alt = funcionario.nome;
  
    // cadastro do nome
    const nome = document.createElement('h3');
    nome.textContent = funcionario.nome;
  
    // entrada de dados referentes ao cargo
    const cargo = document.createElement('p'); 
    cargo.textContent = funcionario.cargo;
  
    // criando os cards
    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(cargo);
  
    // Adicionar ao container
    funcionariosContainer.appendChild(card);
  }
  
  // Chamar a função principal
  exibirDados();
  