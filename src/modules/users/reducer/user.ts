import {SET_NAME} from '../action/setName';

export default (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        name: action.name,
        id: action.id,
      };
    default:
      return state || null;
  }
};
