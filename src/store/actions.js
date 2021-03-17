import { CHANGE_RADIO_SELECT } from './types';
import { CHANGE_INPUT_SEARCH } from './types';

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
