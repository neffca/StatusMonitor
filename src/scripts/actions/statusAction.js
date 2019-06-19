import {UPDATE_STATUS} from '../constants/action-types';

export function updateStatus(payload) {
  return {
    type: UPDATE_STATUS,
    payload
  }
}
