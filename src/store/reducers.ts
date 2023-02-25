import { films } from '../components/App/db';
import {
  CHANGE_RADIO_SELECT,
  CHANGE_INPUT_SEARCH,
  CHANGE_FILMS_ARRAY,
} from './types';

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
  films: Array<FilmsType> | null,
  radioSelect: string | null,
  searchText: string | null,
}

const initialState: InitialStateType = {
  films: films,
  radioSelect: 'all',
  searchText: '',
};

export const rootReducer = (state = initialState, action: any):InitialStateType => {
  switch (action.type) {
    case CHANGE_RADIO_SELECT:
      return { ...state, radioSelect: action.payload };

    case CHANGE_INPUT_SEARCH:
      return { ...state, searchText: action.payload };

    case CHANGE_FILMS_ARRAY:
      return { ...state, films: action.payload };

    default:
      return state;
  }
};
