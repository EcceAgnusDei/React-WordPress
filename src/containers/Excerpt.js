import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPostInfos } from '../actions/postActions';

function Excerpt(props) {
	useEffect(() => {
		props.getImgAndAuthor(props.post)
	}, [])

	console.log("post complet", props.fullPost)

	return (
		<div>Excerpt</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		getImgAndAuthor: post => dispatch(getPostInfos(post))
	}
}

const mapStateToProps = state => {
	return {
		fullPost: state.posts.post
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Excerpt)

//dangerouslySetInnerHTML={{__html: post.content.rendered}}