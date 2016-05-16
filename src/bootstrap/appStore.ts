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

const initialState = <State>{
  user: <User> {
    id: '3c152058-1b7e-11e6-bb5d-f70370a2a08b',
    name: 'Jon',
  },

  story: <Story> {
    id: '56110968-1b7e-11e6-a2c7-f70370a2a08b',
    title: 'Test story',
    chunks: [],
    users: [],
  }
};

declare module 'redux' {
  export function createStore<TState>(reducer: IReducer<TState>, initialState?: TState, enhancer?: Function): IStore<TState>;
}

export const appStore: IStore<State> = createStore(
  createReducer(),
  initialState,
  applyMiddleware(createLogger())
);
