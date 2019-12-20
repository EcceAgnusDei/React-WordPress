import { POSTS_LOADING, CATEGORIES_LOADING, SET_SCREEN_SIZE } from './types.js';

export const postsLoading = status => {
	return {
		type: POSTS_LOADING,
		payload: status
	};
};

export const categoriesLoading = status => {
	return {
		type: CATEGORIES_LOADING,
		payload: status
	};
};

export const setScreenSize = size => {
	return {
		type: SET_SCREEN_SIZE,
		payload: size
	};
};
