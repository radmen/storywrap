import { CREATE_STORY } from '../action/createStory';
import { Story } from '../story';

export default function story(state, action): any {
  switch (action.type) {
    case CREATE_STORY:
      return <Story>{
        id: action.id,
        title: action.title,
        owner: action.user,
        chunks: [],
        users: [],
      };
    default:
      return state || null;
  }
}
