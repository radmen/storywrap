import { combineReducers } from 'redux';
import user from '../../modules/users/reducer/user';

export function createReducer() {
  return combineReducers({
    user,
    session: (state) => {
      return state || null;
    }
  });
}
