import { films } from '../components/App/db';
import {
  CHANGE_RADIO_SELECT,
  CHANGE_INPUT_SEARCH,
  // CHANGE_HEADER_SCROLL,
  CHANGE_FILMS_ARRAY,
} from './types';

const initialState = {
  films: films,
  radioSelect: 'all',
  searchText: '',
  // scroll: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RADIO_SELECT:
      return { ...state, radioSelect: action.payload };

    case CHANGE_INPUT_SEARCH:
      return { ...state, searchText: action.payload };

    // case CHANGE_HEADER_SCROLL:
    //   return { ...state, scroll: action.payload };

    case CHANGE_FILMS_ARRAY:
      return { ...state, films: action.payload };

    default:
      return state;
  }
};
