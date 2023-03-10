import {FilmsType} from './reducers'
import { InferActionTypes } from '..';


export type ActionsTypes = InferActionTypes<typeof actions>

export const actions = {

  changeRadioSelect : (radioSelect: string) => {
    return {
      type: 'CHANGE_RADIO_SELECT',
      payload: radioSelect,
    } as const;
  },

  changeInputSearch : (searchText: string) => {
    return {
      type: 'CHANGE_INPUT_SEARCH',
      payload: searchText,
    } as const;
  },

  changeFilmsArray : (films: Array<FilmsType>) => {
    return {
      type: 'CHANGE_FILMS_ARRAY',
      payload: films,
    } as const;
  },


}
