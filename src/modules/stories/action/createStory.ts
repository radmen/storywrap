import { User } from '../../users/user';
const uuid = require('node-uuid');

export const CREATE_STORY = 'CREATE_STORY';

export function createStory(title: string, user: User) {
  return {
    type: CREATE_STORY,
    id: uuid.v1(),
    title,
    user,
  };
}
