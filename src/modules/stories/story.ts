import { User } from '../users/user';
import { StoryChunk } from './story-chunk';

export interface Story {
  title: string,

  chunks: StoryChunk[],

  users: User[],
}
