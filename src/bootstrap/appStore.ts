import { createStore } from 'redux';
import { User } from '../app/users/user';
import { Story } from '../app/stories/story';
import { createReducer } from './appStore/createReducer';
import { IStore } from '~redux/redux';

export interface State {
  user?: User;

  story?: Story;
}

export const appStore: IStore<State> = createStore(createReducer());
