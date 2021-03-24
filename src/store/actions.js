import { CHANGE_RADIO_SELECT } from './types';
import { CHANGE_INPUT_SEARCH } from './types';
import { CHANGE_HEADER_SCROLL } from './types';
import { CHANGE_FILMS_ARRAY } from './types';

export function changeRadioSelect(radioSelect) {
  return {
    type: CHANGE_RADIO_SELECT,
    payload: radioSelect,
  };
}

export function changeInputSearch(searchText) {
  return {
    type: CHANGE_INPUT_SEARCH,
    payload: searchText,
  };
}

export function changeHeaderScroll(scroll) {
  return {
    type: CHANGE_HEADER_SCROLL,
    payload: scroll,
  };
}

export function changeFilmsArray(films) {
  return {
    type: CHANGE_FILMS_ARRAY,
    payload: films,
  };
}
