import { POSTS_LOADING } from './types.js';

export const postsLoading = (status) => {
	return {
		type: POSTS_LOADING,
		payload: status
	}
}