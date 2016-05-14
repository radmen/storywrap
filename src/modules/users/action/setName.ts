const uuid = require('node-uuid');

export const SET_NAME = 'SET_NAME';

export function setName(name: string) {
  const id = uuid.v1();

  return {
    type: SET_NAME,
    name,
    id,
  };
}
