import { combineReducers } from 'redux';

function users(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return action.payload;
    default:
      return state;
  }
}

function post(state = [], action) {
  switch (action.type) {
    case 'FETCHED_POST':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users,
  post
});

export default rootReducer;