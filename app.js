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
import Funcionarios from './funcionario.json' with {type: 'json'}

function criarFuncionario(dadosFuncionario){
  const container = document.getElementById('container')
  const funcionarios = document.createElement('funcionarios')
  const imagem = document.createElement('img')
  const nome = document.createElement('h1')
  const cargo = document.createElement('h2')
  const pastaimg = "/img/"

  funcionarios.classList.add('funcionarios');
  imagem.src = pastaimg + dadosFuncionario.imagem
  imagem.alt = dadosFuncionario.nome
  nome.classList.add('nome')
cargo.textContent = dadosFuncionario.cargo
cargo.classList.add('cargo')

container.appendChild(funcionarios)
funcionarios.appendChild(imagem)
funcionarios.appendChild(cargo)
cargo.appendChild(nome)
}
function carregarFuncionarios(){
  Funcionarios.forEach(criarFuncionario)
}
carregarFuncionarios()