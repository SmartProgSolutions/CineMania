const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb'; // Substituam 'a chave de vcs aqui para não extourar o limite da API do TMDB' 
const idioma = 'pt-BR' // 

const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${idioma}&sort_by=popularity.desc`;

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieCardsContainer = document.getElementById('movie-cards');
            data.results.forEach(movie => {
                const movieCard = createMovieCard(movie);
                console.log(movie)
                movieCardsContainer.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Erro ao buscar filmes:', error));
});

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    // const title = document.createElement('h2');
    // title.textContent = movie.title;

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    // image.alt = movie.title;

    image.addEventListener('click', function() {
        // Armazena o ID do filme no localStorage
        // localStorage.setItem('selectedMovieId', movie.id);
        // Redireciona para a página de detalhes do filme
        // window.location.href = '../../../detailsMovie.html';
        window.location.href = `../../detailsMovie/detailMovie.html?id=${movie.id}`;
    });

    card.appendChild(image);
    // card.appendChild(title);

    return card;
}