class DataSource{
    static searchFilm(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=96c8a7fbe009935d8c1a9643756d797d&language=en-US&page=1&include_adult=false&query=${keyword}`)
       .then(response => response.json())
       .then(responseJson => {
           if(responseJson.results.length > 0) {
               return Promise.resolve(responseJson.results);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
    }
}

export default DataSource;

