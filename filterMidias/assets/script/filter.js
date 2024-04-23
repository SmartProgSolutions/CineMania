// Substitua 'YOUR_API_KEY' pela sua chave de API do TMDB
// const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb';
const apiUrl10 = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`;

console.log("Allora ")

document.addEventListener('DOMContentLoaded', () => {
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

})

