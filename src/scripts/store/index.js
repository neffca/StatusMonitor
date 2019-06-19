import {createStore} from 'redux';
import statusReducer from "../reducers/statusReducer";

function configureStore() {
  return createStore(statusReducer);
}

export default configureStore;
