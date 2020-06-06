import apiHelper from '../helpers/api';
import {
  USERS_FETCH_START,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from './types';

const getUsers = () => {
  return (dispatch) => {
    dispatch({type: USERS_FETCH_START});
    apiHelper.get('users', {per_page: 15}).then((response) => {
      if (response.ok) {
        dispatch({type: USERS_FETCH_SUCCESS, data: response.data.data});
      } else {
        let err =
          response.status === 404 ? "Couldn't load users" : response.problem;
        dispatch({type: USERS_FETCH_FAILURE, error: err});
      }
    });
  };
};

export default {getUsers};
