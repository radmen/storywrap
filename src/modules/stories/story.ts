import { User } from '../users/user';
import { StoryChunk } from './story-chunk';

export interface Story {
  id: string;
  
  title?: string;
  
  owner?: User;

  chunks: StoryChunk[];

  users: User[];
}
