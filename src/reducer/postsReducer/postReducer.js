import { GET_POSTS, GET_POST_INFOS } from '../../actions/types.js';

const initialState = {
	posts: [],
	post: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload
			}
			break;
		case GET_POST_INFOS:
			return {
				...state,
				post: {
					...action.payload.post,
					img: action.payload.img,
					author_name: action.payload.author
				}
			}
		default:
			return state;
			break;
	}
}