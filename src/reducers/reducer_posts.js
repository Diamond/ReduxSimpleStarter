import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, {all: action.payload.data});
    case FETCH_POST:
      return Object.assign({}, state, {post: action.payload.data});
    case DELETE_POST:
      return state;
    default:
      return state;
  }
};
