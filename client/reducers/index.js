import { combineReducers } from 'redux';

function users(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return action.payload;
    default:
      return state;
  }
}

function write(state = [], action) {
  switch (action.type) {
    case 'FETCHED_WRITE':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users,
  write
});

export default rootReducer;