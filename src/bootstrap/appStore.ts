import {createStore} from 'redux';
import {User} from '../app/users/user';
import {Story} from '../app/stories/story';
import {createReducer} from './appStore/createReducer';

interface State {
  session: {
    user?: User;

    story?: Story;
  };
}
;

const initialState = <State>{
  session: {
    user: null,
    story: null,
  }
};

export const appStore = createStore(createReducer(), initialState);
