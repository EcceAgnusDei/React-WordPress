import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';


import { getPosts } from 'actions/postActions.js';
import { useScrollPosition } from 'utils/useScrollPosition';
import theme from 'theme';

import Pagination from './Pagination';
import Excerpt from './Excerpt.js';

function PostsPage({posts, match}) {
	const PER_PAGE = 1;

	const toShow = [];
	const currIndex = match.params.index ? parseInt(match.params.index - 1) * PER_PAGE : 0;
	const maxIndex = posts.length - 1;
	for (let i = currIndex ; i <= Math.min(currIndex + PER_PAGE - 1, maxIndex) ; i++) {
		toShow.push(posts[i]);
	}

	const excerptsJSX = toShow.map(post =>
		<Excerpt key={post.id} post={post} rootLink="/posts"/>
	)
	return (
		<React.Fragment>
			<Helmet>
				<title>Last Posts</title>
				<meta name="description" content="See the last posts" />
			</Helmet>
			{excerptsJSX}
			<Pagination 
				perPage={PER_PAGE}
				current={match.params.index ? parseInt(match.params.index) : 1}
				total={posts.length}
				limit={3}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
}

export default connect(mapStateToProps, null)(PostsPage);

//dangerouslySetInnerHTML={{__html: post.content.rendered}}
//props.match.params.index