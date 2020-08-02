import '../component/list-film.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const search = () => {
    const searchElement = document.querySelector("search-bar");
    const FilmList = document.querySelector("film-list");
   
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchFilm(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        FilmList.films = results;
        
    };

    const fallbackResult = message => {
        FilmList.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
 
export default search;