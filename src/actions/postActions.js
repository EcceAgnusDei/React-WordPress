import { GET_POSTS } from './types.js';

export const getPosts = () => dispatch => {
	const posts = [];
	fetch('wp-json/wp/v2/posts')
	.then(resp => resp.json())
	.then(json => {
		json.forEach(post => {
			let getImageUrl = null;
			if (post.featured_media != 0) {
				getImageUrl = fetch(`wp-json/wp/v2/media/${post.featured_media}`).then(res => res.json());
			} 
			const getAuthor = fetch(`wp-json/wp/v2/users/${post.author}`).then(res => res.json());
			Promise.all([getImageUrl, getAuthor])
			.then(res => {
				posts.push({
					...post,
					author_name: res[1].name,
					img: getImageUrl != null ? {
						large: res[0].media_details.sizes.large ? 
							res[0].media_details.sizes.large.source_url : null,
						medium_large: res[0].media_details.sizes.medium_large ? 
							res[0].media_details.sizes.medium_large.source_url : null,
						medium: res[0].media_details.sizes.medium ? 
							res[0].media_details.sizes.medium.source_url : null,
						alt_text: res[0].alt_text
					} : null
				})
				if(posts.length === json.length) {
					dispatch({type: GET_POSTS, payload: posts})
				}
			})
		})
	})
	.catch(err => console.log(err));
}

// export const getPostInfos = (post) => dispatch => {
// 	const getImageUrl = fetch(`wp-json/wp/v2/media/${post.featured_media}`).then(res => res.json());
// 	const getAuthor = fetch(`wp-json/wp/v2/users/${post.author}`).then(res => res.json());

// 	Promise.all([getImageUrl, getAuthor])
// 	.then(res => {
// 		console.log(res);
// 		dispatch({
// 			type: GET_POST_INFOS, 
// 			payload: {
// 				post,
// 				img: {
// 					large: res[0].media_details.sizes.large.source_url,
// 					medium_large: res[0].media_details.sizes.medium_large.source_url,
// 					medium: res[0].media_details.sizes.medium.source_url,
// 				},
// 				author: res[1].name
// 			}
// 		})
// 	})
// } 