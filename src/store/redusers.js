import { films } from '../components/App/db';

const initialState = {
  films: films,
  radioSelect: 'all',
  searchText: '',
};

export const rootReducer = (state = initialState) => {
  return state;
};
