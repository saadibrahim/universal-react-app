import {produce} from 'immer';
import {
  USERS_FETCH_START,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from '../actions/types';

const users = (
  state = {
    fetching: false,
    data: [],
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case USERS_FETCH_START:
      return produce(state, (draft) => {
        draft.fetching = true;
      });
    case USERS_FETCH_SUCCESS:
      return produce(state, (draft) => {
        draft.fetching = false;
        draft.data = action.data;
      });
    case USERS_FETCH_FAILURE:
      return produce(state, (draft) => {
        draft.fetching = false;
        draft.error = action.error;
      });
    default:
      return state;
  }
};

export default users;
