import { GET_POSTS } from '../../actions/types.js';

const initialState = {
	posts: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload
			}
			break;
		default:
			return state;
			break;
	}
}