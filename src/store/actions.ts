import {
  CHANGE_RADIO_SELECT,
  CHANGE_INPUT_SEARCH,
  CHANGE_FILMS_ARRAY,
} from './types';

import {FilmsType} from './reducers'
import { InferActionTypes } from '..';


export type ActionsTypes = InferActionTypes<typeof actions>

export const actions = {

  changeRadioSelect : (radioSelect: string) => {
    return {
      type: CHANGE_RADIO_SELECT,
      payload: radioSelect,
    };
  },

  changeInputSearch : (searchText: string) => {
    return {
      type: CHANGE_INPUT_SEARCH,
      payload: searchText,
    };
  },

  changeFilmsArray : (films: Array<FilmsType>) => {
    return {
      type: CHANGE_FILMS_ARRAY,
      payload: films,
    };
  },


}
