import { POSTS_LOADING, VIEWS_LOADING, MEDIAS_LOADING, USERS_LOADING, SET_SCREEN_SIZE } from '../../actions/types.js';
import { getSize } from 'utils/utils';
import theme from 'theme';

const initialState = {
	postsLoading: true,
	viewsLoading: true,
	mediasLoading: true,
	usersLoading: true,
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
		case VIEWS_LOADING:
			return {
				...state,
				viewsLoading: action.payload
			};
		case MEDIAS_LOADING:
			return {
				...state,
				mediasLoading: action.payload
			};
		case USERS_LOADING:
			return {
				...state,
				usersLoading: action.payload
			};
		default:
			return state;
	}
};
