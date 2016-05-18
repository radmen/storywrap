import { CREATE_STORY } from '../action/createStory';
import { ADD_STORY_CHUNK } from '../action/addStoryChunk';
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
    case ADD_STORY_CHUNK:
      return Object.assign({}, state, {
        chunks: [
          ...state.chunks,
          {
            user: action.user,
            text: action.text,
            createdAt: action.createdAt,
          },
        ],
      });
    default:
      return state || null;
  }
}
