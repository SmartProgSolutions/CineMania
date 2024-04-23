//é o metodo para buscar todos os generos de filmes pelo filtro de Genre_id
// http://api.themoviedb.org/3/genre/movie/list?api_key=5d3740a5fc6dfa4e862bede23e6d4fdb
// Vcs podem filtrar pela Query Selector, languagen=linguagem desejada 

//  è bom vcs lerem a doc da API do TMDB https://developer.themoviedb.org/reference

function getGenreIdsFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idsParam = urlParams.get('ids');

    // Separar os IDs dos gêneros usando espaço como separador
    const genreIds = idsParam ? idsParam.split(' ') : [];

    return genreIds;
}


function fetchGenre() {
    const genreIds = getGenreIdsFromUrl();
    const categorySection = document.querySelector('.preference-categories');

    genreIds.forEach(genreId => {
        // Aqui você pode buscar os detalhes do gênero usando a API do TMDB, se necessário
        // Por exemplo, para obter o nome do gênero, você pode fazer uma chamada separada
        // ou usar um mapeamento de IDs para nomes de gêneros, se disponível.

        // Cria a seção de categoria para o gênero específico
        const category = createGenreSection(genreId); // Modifique esta função para aceitar um ID de gênero
        categorySection.appendChild(category);

        // Busca os filmes para o gênero específico e os anexa à seção de filmes da categoria
        fetchMoviesByGenre(genreId, category.querySelector('.movie-row'));
    });
}

// Função hipotética para buscar os detalhes dos gêneros
function fetchGenreDetails(genreIds) {
    // Implemente a lógica para buscar os detalhes dos gêneros usando a API do TMDB
    // Retorna uma promessa que resolve para um array de objetos de gênero
}


function createGenreSection(genreId) {
    const category = document.createElement('div');
    category.className = 'category-grade';

    // Cria o elemento div para conter a seção do gênero
    const genreSection = document.createElement('div');

    // Aqui você pode adicionar o nome do gênero, se necessário
    // Por exemplo, se você tiver um mapeamento de IDs para nomes de gêneros, você pode usá-lo
    const genreName = document.createElement('h2');
    genreName.textContent = 'Nome do Gênero'; // Substitua 'Nome do Gênero' pelo nome real do gênero
    genreSection.appendChild(genreName);

    const movieRow = document.createElement('div');
    movieRow.className = 'movie-row';
    genreSection.appendChild(movieRow);

    // Adiciona a seção do gênero ao contêiner da categoria
    category.appendChild(genreSection);

    return category;
}

// Exemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    const genreIds = getGenreIdsFromUrl();
    console.log("esses são os ids passados pela URL:",genreIds); // Exibe os IDs dos gêneros na console
});