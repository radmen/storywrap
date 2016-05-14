import { createStore, applyMiddleware } from 'redux';
import { User } from '../modules/users/user';
import { Story } from '../modules/stories/story';
import { createReducer } from './appStore/createReducer';
import { IStore } from '~redux/redux';

const createLogger = require('redux-logger');

export interface State {
  user?: User;

  story?: Story;
}

export const appStore: IStore<State> = createStore(
  createReducer(),
  applyMiddleware(createLogger())
);
