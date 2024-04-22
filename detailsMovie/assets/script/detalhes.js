document.addEventListener("DOMContentLoaded", function () {
    
    // Extrai o ID do filme da URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    console.log(movieId);
    
    // const movieId = '654739';
    const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${apiKey}`;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById("movieDetails");

            // Cria um contêiner para a imagem e os detalhes do filme
            const movieInfoContainer = document.createElement("div");
            movieInfoContainer.style.display = "flex";
            movieInfoContainer.style.flexDirection = "row";
            movieInfoContainer.style.alignItems = "flex-start";
            movieInfoContainer.style.justifyContent = "space-between";

            // Cria um contêiner para a imagem
            const posterContainer = document.createElement("div");
            posterContainer.style.flex = "1";

            const posterElement = document.createElement("img");
            posterElement.src = imageBaseUrl + data.poster_path;
            posterElement.alt = data.title + ' Poster';
            posterElement.style.maxWidth = '400px';
            posterElement.style.height = 'auto';

            posterContainer.appendChild(posterElement);

            // Cria um contêiner para os detalhes do filme
            const detailsContainer = document.createElement("div");
            detailsContainer.style.flex = "2";

            const titleElement = document.createElement("h2");
            titleElement.textContent = data.title;

            const overviewElement = document.createElement("p");
            overviewElement.textContent = "Sinopse: " + data.overview;

            const runtimeElement = document.createElement("p");
            runtimeElement.textContent = "Duração: " + data.runtime + " minutos";

            const voteAverageElement = document.createElement("p");
            voteAverageElement.textContent = "Avaliação: " + data.vote_average;

            const genresElement = document.createElement("p");
            genresElement.textContent = "Gêneros: " + data.genres.map(genre => genre.name).join(', ');

            const releaseDateElement = document.createElement("p");
            releaseDateElement.textContent = "Data de Lançamento: " + data.release_date;

            detailsContainer.appendChild(titleElement);
            detailsContainer.appendChild(releaseDateElement);
            detailsContainer.appendChild(runtimeElement);
            detailsContainer.appendChild(voteAverageElement);
            detailsContainer.appendChild(genresElement);
            detailsContainer.appendChild(overviewElement);

            // Adiciona os contêineres ao contêiner principal
            movieInfoContainer.appendChild(posterContainer);
            movieInfoContainer.appendChild(detailsContainer);

            movieDetails.appendChild(movieInfoContainer);
        })
        .catch(error => console.error("Erro ao buscar os dados do JSON:", error));
})