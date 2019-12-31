import {
	FETCH_POSTS,
	GET_BY_SLUG,
	FETCH_CATEGORIES,
	FETCH_VIEWS,
	FETCH_USERS,
	FETCH_MEDIAS
} from '../../actions/types.js';

const initialState = {
	posts: [],
	categories: [],
	views: {},
	medias: [],
	users: [],
	post: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				posts: action.payload
			};
		case GET_BY_SLUG:
			return {
				...state,
				post: state.posts.find(post => post.slug === action.payload) || initialState.post
			};
		case FETCH_CATEGORIES:
			return {
				...state,
				categories: action.payload
			};
		case FETCH_USERS:
			return {
				...state,
				users: action.payload
			};
		case FETCH_VIEWS:
			return {
				...state,
				views: action.payload
			};
		case FETCH_MEDIAS:
			return {
				...state,
				medias: action.payload
			};
		default:
			return state;
	}
};
