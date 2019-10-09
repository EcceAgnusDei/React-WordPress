import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Post(props) {

	let post = null;
	console.log(props.posts)

	useEffect(() => {
		if (props.posts.length > 0) {
			post = props.posts.filter(post => post.slug === props.match.params.slug)
			console.log("*****Le post*****", post);
		}
	}, [props.posts])

	return (
		<div>
			{post != null ?
			<h1>{post.title.rendered}</h1> :
			<h2>Loading...</h2>}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
}

export default connect(mapStateToProps)(Post)