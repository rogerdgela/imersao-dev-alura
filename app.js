/*
    Esta função é responsável por renderizar os resultados da pesquisa
    em uma seção HTML específica. Ela itera sobre um array de dados,
    criando um elemento HTML para cada resultado e, em seguida,
    insere todos os resultados na seção.
*/

function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";

    // Itera sobre cada resultado no array de dados
    for (let dado of dados) {
        // Cria um novo elemento de resultado com o título, descrição e link
        resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Insere o HTML dos resultados na seção
    section.innerHTML = resultado;
}