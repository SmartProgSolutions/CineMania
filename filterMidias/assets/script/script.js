const apiKey = '5d3740a5fc6dfa4e862bede23e6d4fdb';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  function fetchAndDisplayMovies() {
    fetch(url,options)
        .then(response => response.json())
        .then(data => {
            document.getElementById('element').innerHTML = json.stringify(data, null, 2);
             })
}

document.addEventListener('DOMContentLoaded', () => {	
    const popularMoviesurl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    fetchAndDisplay(popularMoviesurl, 'popularMovies');

    const seriesId = 'series_id';
    const seriesInfoUrl = `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`;
    const seriesImagesUrl = `https://api.themoviedb.org/3/tv/${seriesId}/images?include_image_language=en&language=en`;
    const seriesKeywordsUrl = `https://api.themoviedb.org/3/tv/${seriesId}/keywords`;

    fetchAndDisplay(seriesInfoUrl, 'series-info');
    fetchAndDisplay(seriesImagesUrl, 'series-images');
    fetchAndDisplay(seriesKeywordsUrl, 'series-keywords');
});
// https://api.themoviedb.org/3/search/movie?query=&language=pt-BR&api_key=5d3740a5fc6dfa4e862bede23e6d4fdb