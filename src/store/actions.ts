import {
  CHANGE_RADIO_SELECT,
  CHANGE_INPUT_SEARCH,
  CHANGE_FILMS_ARRAY,
} from './types';

import {FilmsType} from './reducers'

type ChangeRadioSelectActionType = {
  type: typeof CHANGE_RADIO_SELECT,
  payload: string
}

type ChangeInputSearchActionType = {
  type: typeof CHANGE_INPUT_SEARCH,
  payload: string
}

type ChangeFilmsArrayActionType = {
  type: typeof CHANGE_FILMS_ARRAY,
  payload: Array<FilmsType>
}

export function changeRadioSelect(radioSelect: string): ChangeRadioSelectActionType {
  return {
    type: CHANGE_RADIO_SELECT,
    payload: radioSelect,
  };
}

export function changeInputSearch(searchText: string): ChangeInputSearchActionType {
  return {
    type: CHANGE_INPUT_SEARCH,
    payload: searchText,
  };
}

export function changeFilmsArray(films: Array<FilmsType>): ChangeFilmsArrayActionType {
  return {
    type: CHANGE_FILMS_ARRAY,
    payload: films,
  };
}
