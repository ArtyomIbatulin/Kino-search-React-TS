import { createSelector } from 'reselect';

const getFilms = (state) => state.films;
const getradioSelect = (state) => state.radioSelect;
const getSearchText = (state) => state.searchText;

export const filteredData = createSelector(
  [getFilms, getradioSelect, getSearchText],
  (films, radioSelect, searchText) => {
    let res;
    switch (radioSelect) {
      case 'all':
        res = films;
        break;
      case 'action_movie':
        res = films.filter(
          (item) => item.genre === 'Боевики' || item.genre === 'action_movie'
        );
        break;
      case 'comedy':
        res = films.filter(
          (item) => item.genre === 'Комедии' || item.genre === 'comedy'
        );
        break;
      case 'fantasy':
        res = films.filter(
          (item) => item.genre === 'Фантастика' || item.genre === 'fantasy'
        );
        break;
      case 'horror':
        res = films.filter(
          (item) => item.genre === 'Ужасы' || item.genre === 'horror'
        );
        break;
    }

    return res.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.director.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);
