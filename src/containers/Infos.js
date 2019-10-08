import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions/postActions.js';
import Excerpt from './Excerpt.js';

function Infos(props) {
	useEffect(() => {
		props.getAllPosts();
	}, [])

	console.log(props.posts);

	const excerptsJSX = props.posts.map(post =>
		<Excerpt key={post.id} post={post} />
	)
	return (
		<div>
			{excerptsJSX}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllPosts: () => dispatch(getPosts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Infos);

//dangerouslySetInnerHTML={{__html: post.content.rendered}}