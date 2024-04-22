// é o metodo para buscar todos os generos de filmes pelo filtro de Genre_id
// http://api.themoviedb.org/3/genre/movie/list?api_key=5d3740a5fc6dfa4e862bede23e6d4fdb
// Vcs podem filtrar pela Query Selector, languagen=linguagem desejada 

//  è bom vcs lerem a doc da API do TMDB https://developer.themoviedb.org/reference

const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb'; // é bom que cada um colque sua chave, se não vcs vão estourar meu limite kkkk 

// busca os generos do tmbd e chama a  fetchMoviesByGenre para que cade filme seja logo colocado dentroo
// de sua respctiva categoria 
function fetchGenre() {
    const fetchGenreUrl = `http://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`;

    fetch(fetchGenreUrl)
        .then(response => response.json())
        .then(data => {
            const categorySection = document.querySelector('.categories');
            data.genres.forEach(genre => {
                const category = createGenreSection(genre);
                categorySection.appendChild(category);
                console.log(genre)

                // Busca os filmes para cada gênero e os anexa à seção de filmes da categoria
                fetchMoviesByGenre(genre.id, category.querySelector('.movie-row'));
            });
        }).catch(error => console.error('Erro ao buscar gêneros', error));
}

// essa fynção busca o Json com os filmes desejados de determinada categoria
function fetchMoviesByGenre(genreId, movieRow) {
    const fetchMoviesByGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=pt-BR&sort_by=popularity.desc`;

    fetch(fetchMoviesByGenreUrl)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {
                const movieCard = createMovieCard(movie);
                movieRow.appendChild(movieCard);
                console.log(movie)
            });
        })
        .catch(error => console.error('Erro ao buscar filmes:', error));
}


// Essa finção cria os seções de categorias , 
function createGenreSection(genre) {
    const category = document.createElement('div');
    category.className = 'category-grade';

    const genreName = document.createElement('h2');
    genreName.textContent = genre.name;
    category.appendChild(genreName);

    // cria um elemento onde seram inseridos 
    const movieRow = document.createElement('div');
    movieRow.className = 'movie-row';
    category.appendChild(movieRow);

    return category;
}

// Essa fpnção cria os cards dos filmes 
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const title = document.createElement('span');
    title.textContent = movie.title;

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    image.alt = movie.title;
    image.addEventListener('click', function() {
        // Redireciona para a página de detalhes do filme
        window.location.href = `../../detailsMovie/detailMovie.html?id=${movie.id}`;
    });

    card.appendChild(image); 
    card.appendChild(title);

    return card;
}


// é uma funçaõ que ouve quando a pagina é carrega para buscar as informações na API 
document.addEventListener('DOMContentLoaded', () => {
    fetchGenre();
});



// http://api.themoviedb.org/3/movie/popular?api_key=5d3740a5fc6dfa4e862bede23e6d4fdb&language=pt-BR filmes populares