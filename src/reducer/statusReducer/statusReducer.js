import { POSTS_LOADING, SET_SCREEN_SIZE } from '../../actions/types.js';
import { getSize } from 'utils/utils';
import theme from 'theme';

const initialState = {
	postsLoading: true,
	screenSize: getSize(theme)
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SCREEN_SIZE:
			return {
				...state,
				screenSize: action.payload
			};
		case POSTS_LOADING:
			return {
				...state,
				postsLoading: action.payload
			};
		default:
			return state;
	}
};
