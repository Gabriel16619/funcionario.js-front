/**
 * forEach -> ele envia "produtos" que estao dentro da classe/variavel, EX: --produtos.forEach(mostrarProdutos)--
 * Array: é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo (como números ou strings), acessíveis por meio de um índice
 */
import funcionario from './funcionario.json' with {type:'json'}

function criarCardFuncionario (funcionario){
    const funcionariosContainer = document.getElementById('funcionarios')

    const card = document.createElement('div');
    card.classList.add('card-funcionario');

    //cadastro do nome do funcionario
    const nome = document.createElement('h3');
    nome.textContent = funcionario.nome;

    const cargo = document.createComment('p')
    cargo.textContent = funcionario.cargo

    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(cargo)

    funcionariosContainer.appendChild(card)

}