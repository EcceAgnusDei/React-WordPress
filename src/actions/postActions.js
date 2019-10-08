import { GET_POSTS, GET_POST_INFOS } from './types.js';

export const getPosts = () => dispatch => {
	fetch('wp-json/wp/v2/posts')
	.then(resp => resp.json())
	.then(json => dispatch({type:GET_POSTS, payload: json}))
	.catch(err => console.log(err));
}

export const getPostInfos = (post) => dispatch => {
	const getImageUrl = fetch(`wp-json/wp/v2/media/${post.featured_media}`).then(res => res.json());
	const getAuthor = fetch(`wp-json/wp/v2/users/${post.author}`).then(res => res.json());

	Promise.all([getImageUrl, getAuthor])
	.then(res => {
		console.log(res);
		dispatch({
			type: GET_POST_INFOS, 
			payload: {
				post,
				img: {
					large: res[0].media_details.sizes.large.source_url,
					medium_large: res[0].media_details.sizes.medium_large.source_url,
					medium: res[0].media_details.sizes.medium.source_url,
				},
				author: res[1].name
			}
		})
	})
} 