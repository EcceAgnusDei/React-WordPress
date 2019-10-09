import { POSTS_LOADING } from '../../actions/types.js';

const initialState = {
	postsLoading: true
}

export default (state = initialState, action) => {
	switch (action.type) {
		case POSTS_LOADING: 
			return {
				...state,
				postsLoading: action.payload
			}
		break;
		
		default:
			return state;
	}
}