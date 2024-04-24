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

    genreIds.pop(); // Remove o último elemento do array, 
    // Heitor depois remove 

    return genreIds;
}

const map = {
    28: 'Ação',
    12: 'Aventura',
    16: 'Animação',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção Científica',
    10770: 'Cinema TV',
    53: 'Thriller',
    10752: 'Guerra',
    37: 'Faroeste'
};

function fetchGenre() {
    const genreIds = getGenreIdsFromUrl();
    const categorySection = document.querySelector('.preference-categories');

    genreIds.forEach(genreId => {

        // Cria a seção de categoria para o gênero específico
        const category = createGenreSection(genreId); // Modifique esta função para aceitar um ID de gênero
        categorySection.appendChild(category);

        // Busca os filmes para o gênero específico e os anexa à seção de filmes da categoria
        fetchMoviesByGenre(genreId, category.querySelector('.movie-row'));
    });
}


function createGenreSection(genreId) {
    const category = document.createElement('div');
    category.className = 'category-grade';
    console.log(genreId); // Exibe o ID do gênero na console

    // Cria o elemento div para conter a seção do gênero
    const genreSection = document.createElement('div');

    // Aqui você pode adicionar o nome do gênero, se necessário
    // Por exemplo, se você tiver um mapeamento de IDs para nomes de gêneros, você pode usá-lo
    const genreName = document.createElement('h2');
    genreName.textContent = map[genreId] || 'Gênero Desconhecido'; 
    
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


