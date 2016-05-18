import { User } from '../../users/user';

export const ADD_STORY_CHUNK = 'ADD_STORY_CHUNK';

export function addStoryChunk(text: string, user: User) {
  return {
    type: ADD_STORY_CHUNK,
    text,
    user,
    createdAt: new Date(),
  };
}
