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
        res = films.filter((item) => item.genre === 'Боевики');
        break;
      case 'comedy':
        res = films.filter((item) => item.genre === 'Комедии');
        break;
      case 'fantasy':
        res = films.filter((item) => item.genre === 'Фантастика');
        break;
      case 'horror':
        res = films.filter((item) => item.genre === 'Ужасы');
        break;
    }

    return res.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.director.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);
