import { films } from '../components/App/db';

import {ActionsTypes} from './actions'

export type FilmsType = {
  poster: string | null,
  name:  string | null,
  genre:  string | null,
  director: string | null,
  desc:  string | null,
  description: string | null,
  stars: number | null,
  rating:  string | null,
}

export type InitialStateType = {
  films: Array<FilmsType>,
  radioSelect: string ,
  searchText: string ,
}

const initialState: InitialStateType = {
  films: films,
  radioSelect: 'all',
  searchText: '',
};

export const rootReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case 'CHANGE_RADIO_SELECT':
      return { ...state, radioSelect: action.payload };

    case 'CHANGE_INPUT_SEARCH':
      return { ...state, searchText: action.payload };

    case 'CHANGE_FILMS_ARRAY':
      return { ...state, films: action.payload };

    default:
      return state;
  }
};
