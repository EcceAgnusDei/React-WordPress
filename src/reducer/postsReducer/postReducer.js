import { GET_POSTS, GET_BY_SLUG } from '../../actions/types.js';

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
		case GET_BY_SLUG:
			return {
				...state,
				post: state.posts.find(post => post.slug === action.payload) ||
				initialState.post
			}
		default:
			return state;
			break;
	}
}