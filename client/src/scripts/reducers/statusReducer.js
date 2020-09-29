import {UPDATE_STATUS} from '../constants/action-types';

const initialState = {
  statuses: [{date: '10/11/2019', status: 3}, {date: '10/12/2019', status: 1}]
}

const statusReducer =(state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      const statuses = state.statuses.filter((status) => {
        return status.date !== action.payload.date;
      });
      return {
        ...state,
          statuses: statuses.concat(action.payload)
      };
      default:
        return state
  }
}

export default statusReducer;
