import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions/postActions.js';
import Excerpt from './Excerpt.js';

function Infos(props) {

	const excerptsJSX = props.posts.map(post =>
		<Excerpt key={post.id} post={post} rootLink="/posts"/>
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

export default connect(mapStateToProps, null)(Infos);

//dangerouslySetInnerHTML={{__html: post.content.rendered}}