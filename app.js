function pesquisar() { // Acessa a seção HTML com o ID "resultados-pesquisa" para inserir os resultados.
    let section = document.getElementById("resultados-pesquisa");
  

    let campoPesquisa = document.getElementById("campo-pesquisa").value // inserindo o valor da tag em uma var

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado. Você não buscou por um cantor ou compositor..r</p>"
        return
    }

    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase(); //deixando em letras minusculas

    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) na lista de dados.
    for (let dado of dados) {
      // Concatena HTML para criar um novo elemento de resultado.
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      //se titulo includes campoPesquisa..
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){ // verificando a lista
        // Cada resultado terá um título, descrição e link para o YouTube.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Ouvir no Youtube</a>
        </div>
      `;
      }

      console.log(dado.titulo.includes(campoPesquisa)) //true ou false ^ lá no console
    }
    if(!resultados){ // é igual a resultados == ""
       resultados = "<p> Nada foi encontrado!</p>"
       return
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados
}