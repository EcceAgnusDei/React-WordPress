import { GET_POSTS, GET_BY_SLUG } from './types.js';

import { postsLoading } from './statusActions.js';

export const fetchPosts = () => dispatch => {
	dispatch(postsLoading(true));
	const posts = [];
	fetch('/wp-json/wp/v2/posts')
		.then(resp => resp.json())
		.then(json => {
			json.forEach(post => {
				let getImageUrl = null;
				if (post.featured_media != 0) {
					getImageUrl = fetch(`/wp-json/wp/v2/media/${post.featured_media}`).then(res => res.json());
				}
				const getAuthor = fetch(`/wp-json/wp/v2/users/${post.author}`).then(res => res.json());
				Promise.all([getImageUrl, getAuthor]).then(res => {
					posts.push({
						...post,
						author_name: res[1].name,
						img:
							getImageUrl != null
								? {
										full: res[0].media_details.sizes.full.source_url,
										large: res[0].media_details.sizes.large
											? res[0].media_details.sizes.large.source_url
											: null,
										medium_large: res[0].media_details.sizes.medium_large
											? res[0].media_details.sizes.medium_large.source_url
											: null,
										medium: res[0].media_details.sizes.medium
											? res[0].media_details.sizes.medium.source_url
											: null,
										small: res[0].media_details.sizes.thumbnail
											? res[0].media_details.sizes.thumbnail.source_url
											: null,
										alt_text: res[0].alt_text
								  }
								: null
					});
					if (posts.length === json.length) {
						posts.sort((a, b) => b.id - a.id);
						dispatch({ type: GET_POSTS, payload: posts });
						dispatch(postsLoading(false));
					}
				});
			});
		})
		.catch(err => console.log(err));
};

export const getBySlug = slug => {
	return { type: GET_BY_SLUG, payload: slug };
};
