import {User} from '../users/user';

export interface Story {
	title: string,
	
	chunks: string[],
	
	users: User[],
}
