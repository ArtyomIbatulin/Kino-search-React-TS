import { CHANGE_RADIO_SELECT } from './types';

export function changeRadioSelect(event) {
  return {
    type: CHANGE_RADIO_SELECT,
    payload: event.target.value,
  };
}
