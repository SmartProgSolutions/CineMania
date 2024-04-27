
const apiKeyy = '5d3740a5fc6dfa4e862bede23e6d4fdb'; // é bom que cada um colque sua chave, se não vcs vão estourar meu limite kkkk 


// essa fynção busca o Json com os filmes desejados
function fetchMoviesByType() {
    const fetchMoviesByGenreUrl = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${apiKeyy}&page=1`;

    fetch(fetchMoviesByGenreUrl)
        .then(response => response.json())
        .then(data => {
            const popularMoviesDiv = document.querySelector('.popular-movies');
            data.results.forEach(movie => {
                const movieCard = createMovieCard(movie);
                console.log("ihh",data)
                popularMoviesDiv.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Erro ao buscar filmes:', error));
}



// Essa fpnção cria os cards dos filmes 
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const title = document.createElement('h3');
    title.textContent = movie.title;

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    image.alt = movie.title;

    image.addEventListener('click', function() {
        // Redireciona para a página de detalhes do filme
        window.location.href = `https://smartprogsolutions.github.io/CineMania/detailsMovie/detailMovie.html?id=${movie.id}`;
    });

    card.appendChild(image); 
    card.appendChild(title);

    return card;
}


document.addEventListener('DOMContentLoaded', () => {

    fetchMoviesByType(); // Adicione esta linha
});

