import { films } from '../components/App/db';
import { CHANGE_RADIO_SELECT } from './types';
import { CHANGE_INPUT_SEARCH } from './types';

const initialState = {
  films: films,
  radioSelect: 'all',
  searchText: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RADIO_SELECT:
      return { ...state, radioSelect: action.payload };

    case CHANGE_INPUT_SEARCH:
      return { ...state, searchText: action.payload };

    default:
      return state;
  }
};
