import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';

import Sidebar from 'layout/Sidebar';

import Pagination from './Pagination';
import Excerpt from './Excerpt.js';

const StyledDiv = styled.div`
	display: flex;
`;

function PostsPage({ posts, match }) {
	const PER_PAGE = 2;

	const toShow = [];
	const currIndex = match.params.index ? parseInt(match.params.index - 1) * PER_PAGE : 0;
	const maxIndex = posts.length - 1;
	for (let i = currIndex; i <= Math.min(currIndex + PER_PAGE - 1, maxIndex); i++) {
		toShow.push(posts[i]);
	}

	const excerptsJSX = toShow.map(post => <Excerpt key={post.id} post={post} rootLink="/post" />);
	return (
		<Grid container spacing={3}>
			<Helmet>
				<title>Last Posts</title>
				<meta name="description" content="See the last posts" />
			</Helmet>
			<Grid item xs={12} md={9}>
				<main>
					{excerptsJSX}
					<Pagination
						perPage={PER_PAGE}
						current={match.params.index ? parseInt(match.params.index) : 1}
						total={posts.length}
						limit={3}
					/>
				</main>
			</Grid>
			<Grid item xs={12} md={3}>
				<Sidebar />
			</Grid>
		</Grid>
	);
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	};
};

export default connect(mapStateToProps, null)(PostsPage);

//dangerouslySetInnerHTML={{__html: post.content.rendered}}
//props.match.params.index
