
document.addEventListener('DOMContentLoaded', () => {
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
})

