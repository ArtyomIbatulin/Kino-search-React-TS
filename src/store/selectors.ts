import { createSelector } from 'reselect';
import {AppStateType} from '../index'

const getFilms = (state: AppStateType) => state.films;
const getradioSelect = (state: AppStateType) => state.radioSelect;
const getSearchText = (state: AppStateType) => state.searchText;

type GenreSelector = {
  action_movie: string 
  comedy: string 
  fantasy: string 
  horror: string 
}

export const filteredData = createSelector(
  [getFilms, getradioSelect, getSearchText],
  (films, radioSelect, searchText) => {
     const genreSelector:GenreSelector = {
      action_movie: 'Боевики',
      comedy: 'Комедии',
      fantasy: 'Фантастика',
      horror: 'Ужасы',
    };
  
    return films
      .filter((item) =>
        radioSelect === 'all' ? true : item.genre === genreSelector[radioSelect as keyof GenreSelector])
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.director.toLowerCase().includes(searchText.toLowerCase())
      );

  }
);