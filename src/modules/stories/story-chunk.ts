import { User } from '../users/user';

export interface StoryChunk {
  user: User;
  
  text: string;

  createdAt: Date;
}
