import { films } from '../components/App/db';

import {ActionsTypes} from './actions'

export type FilmsType = {
  poster: string,
  name:  string,
  genre:  string,
  director: string,
  desc:  string,
  description: string,
  stars: number
}

// export type InitialStateType = {
//   films: Array<FilmsType>,
//   radioSelect: string ,
//   searchText: string ,
// }

const initialState = {
  films: films,
  radioSelect: 'all',
  searchText: '',
};

type InitialStateType =  typeof initialState

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
