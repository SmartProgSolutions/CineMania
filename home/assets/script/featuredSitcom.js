
//const apiKeyy = '5d3740a5fc6dfa4e862bede23e6d4fdb';  é bom que cada um colque sua chave, se não vcs vão estourar meu limite kkkk 


// essa fynção busca o Json com os filmes desejados
function fetchMoviesByType3() {
    const fetchMoviesByGenreUrl = `https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&api_key=${apiKeyy}&page=1`;

    fetch(fetchMoviesByGenreUrl)
        .then(response => response.json())
        .then(data => {
            const popularMoviesDiv = document.querySelector('.featured-series');
            data.results.forEach(movie3 => {
                const movieCard = createMovieCard(movie3);
                console.log("ihh",data)
                popularMoviesDiv.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Erro ao buscar filmes:', error));
}



// Essa fpnção cria os cards dos filmes 
function createMovieCard(movie3) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const title = document.createElement('h3');
    title.textContent = movie3.title;

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${movie3.poster_path}`;
    image.alt = movie3.title;

    image.addEventListener('click', function() {
        // Redireciona para a página de detalhes do filme
        window.location.href = `../../detailsMovie/detailMovie.html?id=${movie3.id}`;
    });

    card.appendChild(image); 
    card.appendChild(title);

    return card;
}


document.addEventListener('DOMContentLoaded', () => {

    fetchMoviesByType3(); // Adicione esta linha
});

