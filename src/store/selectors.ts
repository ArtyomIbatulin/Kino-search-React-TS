import { createSelector } from 'reselect';
import {AppStateType} from '../index'

const getFilms = (state: AppStateType) => state.films;
const getradioSelect = (state: AppStateType) => state.radioSelect;
const getSearchText = (state: AppStateType) => state.searchText;

export const filteredData = createSelector(
  [getFilms, getradioSelect, getSearchText],
  (films, radioSelect, searchText) => {
    const genreSelector = {
      action_movie: 'Боевики',
      comedy: 'Комедии',
      fantasy: 'Фантастика',
      horror: 'Ужасы',
    };
    // let res;
    // switch (radioSelect) {
    //   case 'all':
    //     res = films;
    //     break;
    //   case 'action_movie':
    //     res = films.filter(
    //       (item) => item.genre === 'Боевики' || item.genre === 'action_movie'
    //     );
    //     break;
    //   case 'comedy':
    //     res = films.filter(
    //       (item) => item.genre === 'Комедии' || item.genre === 'comedy'
    //     );
    //     break;
    //   case 'fantasy':
    //     res = films.filter(
    //       (item) => item.genre === 'Фантастика' || item.genre === 'fantasy'
    //     );
    //     break;
    //   case 'horror':
    //     res = films.filter(
    //       (item) => item.genre === 'Ужасы' || item.genre === 'horror'
    //     );
    //     break;
    // }

    return films
      .filter((item) =>
        radioSelect === 'all' ? true : item.genre === genreSelector[radioSelect]
      )
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.director.toLowerCase().includes(searchText.toLowerCase())
      );

    // return res.filter(
    //   (item) =>
    //     item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    //     item.director.toLowerCase().includes(searchText.toLowerCase())
    // );
  }
);
