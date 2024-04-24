const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb'; // Substituam 'a chave de vcs aqui para não extourar o limite da API do TMDB' 
const idioma = 'pt-BR' // 

const apiUrl10 = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${idioma}&sort_by=popularity.desc`;

document.addEventListener('DOMContentLoaded', () => {

    // colocar os filmes da page result 
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieCardsContainer = document.getElementById('movie-cards');
            data.results.forEach(movie => {
                const movieCard = createMovieCard(movie);
                // console.log(movie)
                movieCardsContainer.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Erro ao buscar filmes:', error));

        //  esta merda é para buscar os generos e colocar no select
        fetch(apiUrl10)
            .then(response => response.json())
            .then(data => {
                const genreDropdown = document.getElementById('genreFilter');
                genreDropdown.innerHTML = ''; // Limpa o select antes de adicionar novas opções
                const genres = data.genres;
                genres.forEach(genre10 => {
                const option = document.createElement('option');
                option.value = genre10.id; // Use o ID do gênero como valor para a opção
                option.textContent = genre10.name; // Use o nome do gênero como texto visível
                genreDropdown.appendChild(option);
                });
            })
            .catch(error => console.error('Erro ao buscar gêneros:', error));

            document.getElementById('filterButton').addEventListener('click', function() {
                const genre = document.getElementById('genreFilter').value;
                const year = document.getElementById('yearFilter').value;
                let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${idioma}&sort_by=popularity.desc`;
            
                if (genre) {
                    apiUrl += `&with_genres=${genre}`;
                }
                if (year) {
                    apiUrl += `&primary_release_year=${year}`;
                }
            
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const movieCardsContainer = document.getElementById('movie-cards');
                        movieCardsContainer.innerHTML = ''; // Limpa os cartões de filmes existentes
                        data.results.forEach(movie => {
                            const movieCard = createMovieCard(movie);
                            movieCardsContainer.appendChild(movieCard);
                        });
                    })
                    .catch(error => console.error('Erro ao buscar filmes filtrados:', error));
            });
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


console.log("Allora ")

// fetch(apiUrl)
//  .then(response => response.json())
//  .then(data => {
//     const genreDropdown = document.getElementById('genreFilter');
//     genreDropdown.innerHTML = ''; // Limpa o select antes de adicionar novas opções
//     const genres = data.genres;
//     genres.forEach(genre => {
//       const option = document.createElement('option');
//       option.value = genre.id; // Use o ID do gênero como valor para a opção
//       option.textContent = genre.name; // Use o nome do gênero como texto visível
//       genreDropdown.appendChild(option);
//     });
//  })
//  .catch(error => console.error('Erro ao buscar gêneros:', error));


