import { GET_POSTS, GET_BY_SLUG } from './types.js';

import { postsLoading } from './statusActions.js';

export const fetchPosts = () => dispatch => {
	dispatch(postsLoading(true));
	const getMedia = fetch(`/wp-json/wp/v2/media`).then(res => res.json());
	const getUsers = fetch(`/wp-json/wp/v2/users`).then(res => res.json());
	const getViews = fetch(`/react-api/getPostStats.php`).then(res => res.json());
	const getPosts = fetch('/wp-json/wp/v2/posts').then(resp => resp.json());
	Promise.all([getMedia, getUsers, getViews, getPosts]).then(res => {
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
		const posts = res[3];
		dispatch(postsLoading(false));
		dispatch({ type: GET_POSTS, payload: posts });
	});
};
//posts.sort((a, b) => b.id - a.id);
//.catch(err => console.log(err));

export const getBySlug = slug => {
	return { type: GET_BY_SLUG, payload: slug };
};
