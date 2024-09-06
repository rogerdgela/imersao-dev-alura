/*
    Esta função é responsável por renderizar os resultados da pesquisa
    em uma seção HTML específica. Ela itera sobre um array de dados,
    criando um elemento HTML para cada resultado e, em seguida,
    insere todos os resultados na seção.
*/

function pesquisar() 
{
    // Seleciona a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Obtém o termo de pesquisa, convertendo para minúsculas para facilitar a comparação
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o termo de pesquisa tem pelo menos 3 caracteres (para evitar pesquisas muito curtas)
    if (termoPesquisa.length < 3) {
        // Exibe uma mensagem indicando que o termo de pesquisa é muito curto
        section.innerHTML = "<p>Digite pelo menos 3 caracteres para pesquisar.</p>";
        return; // Encerra a função, pois não há necessidade de continuar
    }

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultadosHTML = "";

    // Itera sobre cada dado, verificando se o termo de pesquisa existe no título, descrição ou tags
    for (const dado of dados) {
        // Converte os dados para minúsculas para facilitar a comparação
        const titulo = dado.titulo.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        const tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente em algum dos campos
        if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
            // Cria um novo elemento de resultado e adiciona ao HTML
            resultadosHTML += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (!resultadosHTML) {
        resultadosHTML = "<p>Nenhum resultado encontrado para o termo pesquisado.</p>";
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultadosHTML;
}