import { combineReducers } from 'redux';
import user from '../../modules/users/reducer/user';
import story from '../../modules/stories/reducer/story';

export function createReducer() {
  return combineReducers({
    user,
    story,
  });
}
