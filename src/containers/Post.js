import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBySlug } from '../actions/postActions.js';
import NotFound from '../components/NotFound.js';

function Post(props) {

	useEffect(() => {
		if (!props.loading) {
			props.getPost(props.match.params.slug);
		}
	},[props.loading])

	return (
		<React.Fragment>
			{props.loading ?
			<h2>Loading...</h2> :
			props.post.id ?
			<React.Fragment>
				<h1>{props.post.title.rendered}</h1>
				<p>{props.post.author_name}</p>
				<div dangerouslySetInnerHTML={{__html: props.post.content.rendered}}></div>
			</React.Fragment> :
			<NotFound/>}
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		post: state.posts.post,
		posts: state.posts.posts,
		loading: state.status.postsLoading
	}
}

const mapDispacthToProps = dispatch => {
	return {
		getPost: (slug) => dispatch(getBySlug(slug))
	}
}

export default connect(mapStateToProps, mapDispacthToProps)(Post)