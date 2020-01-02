import { FETCH_POSTS, GET_BY_SLUG, FETCH_CATEGORIES, FETCH_MEDIAS, FETCH_USERS, FETCH_VIEWS } from './types.js';
import { categoriesLoading, usersLoading, viewsLoading, mediasLoading } from './statusActions.js';
import { postsLoading } from './statusActions.js';

export const fetchPosts = () => dispatch => {
	dispatch(postsLoading(true));
	fetch('/wp-json/wp/v2/posts')
		.then(resp => resp.json())
		.then(json => {
			dispatch({ type: FETCH_POSTS, payload: json });
			dispatch(postsLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(categoriesLoading(true));
		});
};

export const fetchMedias = () => dispatch => {
	dispatch(mediasLoading(true));
	fetch(`/wp-json/wp/v2/media`)
		.then(res => res.json())
		.then(json => {
			dispatch({ type: FETCH_MEDIAS, payload: json });
			dispatch(mediasLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(categoriesLoading(true));
		});
};
export const fetchUsers = () => dispatch => {
	dispatch(usersLoading(true));
	fetch(`/wp-json/wp/v2/users`)
		.then(res => res.json())
		.then(json => {
			dispatch({ type: FETCH_USERS, payload: json });
			dispatch(usersLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(categoriesLoading(true));
		});
};
export const fetchViews = () => dispatch => {
	dispatch(viewsLoading(true));
	fetch(`/react-api/getPostStats.php`)
		.then(res => res.json())
		.then(json => {
			dispatch({ type: FETCH_VIEWS, payload: json });
			dispatch(viewsLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(categoriesLoading(true));
		});
};

export const fetchCategories = () => dispatch => {
	dispatch(categoriesLoading(true));
	fetch('/wp-json/wp/v2/categories')
		.then(resp => resp.json())
		.then(json => {
			dispatch({ type: FETCH_CATEGORIES, payload: json });
			dispatch(categoriesLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(categoriesLoading(true));
		});
};

export const getBySlug = slug => {
	return { type: GET_BY_SLUG, payload: slug };
};
