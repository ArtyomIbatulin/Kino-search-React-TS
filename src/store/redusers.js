import { films } from '../components/App/db';
import { CHANGE_RADIO_SELECT } from './types';

const initialState = {
  films: films,
  radioSelect: 'all',
  searchText: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RADIO_SELECT:
      return { ...state, radioSelect: action.payload };

    default:
      return state;
  }
};
