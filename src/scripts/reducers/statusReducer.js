import {UPDATE_STATUS} from '../constants/action-types';

const initialState = {
  statuses: []
}

function statusReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return Object.assign({}, state, {
          statuses: state.statuses.concat(action.payload)
        })
      default:
        return state
  }
}

export default statusReducer;
