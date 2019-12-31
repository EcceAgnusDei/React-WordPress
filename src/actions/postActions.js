import { FETCH_POSTS, GET_BY_SLUG, FETCH_CATEGORIES, FETCH_MEDIAS, FETCH_USERS, FETCH_VIEWS } from './types.js';
import { categoriesLoading, usersLoading, viewsLoading, mediasLoading } from './statusActions.js';
import { postsLoading } from './statusActions.js';

export const fetchPosts = () => dispatch => {
	dispatch(postsLoading(true));
	let posts = [];
	const getPosts = fetch('/wp-json/wp/v2/posts')
		.then(resp => resp.json())
		.then(json => {
			dispatch({ type: FETCH_POSTS, payload: json });
			dispatch(postsLoading(false));
		});
};

export const fetchMedias = () => dispatch => {
	dispatch(mediasLoading(true));
	const getMedia = fetch(`/wp-json/wp/v2/media`)
		.then(res => res.json())
		.then(json => {
			dispatch({ type: FETCH_MEDIAS, payload: json });
			dispatch(mediasLoading(false));
		});
};
export const fetchUsers = () => dispatch => {
	dispatch(usersLoading(true));
	const getUsers = fetch(`/wp-json/wp/v2/users`)
		.then(res => res.json())
		.then(json => {
			dispatch({ type: FETCH_USERS, payload: json });
			dispatch(usersLoading(false));
		});
};
export const fetchViews = () => dispatch => {
	dispatch(viewsLoading(true));
	const getViews = fetch(`/react-api/getPostStats.php`)
		.then(res => res.json())
		.then(json => {
			dispatch({ type: FETCH_VIEWS, payload: json });
			dispatch(viewsLoading(false));
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
//posts.sort((a, b) => b.id - a.id);
//.catch(err => console.log(err));
// res[3].forEach(post => {
// 	const media = res[0].find(med => med.id === post.featured_media);
// 	posts.push({
// 		...post,
// 		views: JSON.parse(res[2][post.id]),
// 		author_name: res[1].find(user => user.id === post.author).name,
// 		img: media
// 			? {
// 					full: media.media_details.sizes.full.source_url,
// 					large: media.media_details.sizes.large ? media.media_details.sizes.large.source_url : null,
// 					medium_large: media.media_details.sizes.medium_large
// 						? media.media_details.sizes.medium_large.source_url
// 						: null,
// 					medium: media.media_details.sizes.medium
// 						? media.media_details.sizes.medium.source_url
// 						: null,
// 					small: media.media_details.sizes.thumbnail
// 						? media.media_details.sizes.thumbnail.source_url
// 						: null,
// 					alt_text: media.alt_text
// 			  }
// 			: null
// 	});
// });
