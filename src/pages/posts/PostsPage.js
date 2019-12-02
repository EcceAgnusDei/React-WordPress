import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import Sidebar from 'layout/Sidebar';
import Space from 'elements/Space';
import theme from 'theme';

import Pagination from './Pagination';
import Excerpt from './Excerpt.js';

const StyledDiv = styled.div`
	display: flex;
`;

function PostsPage({ posts, match, categories, loading }) {
	const PER_PAGE = 2;

	const category = categories.find(cat => cat.slug === match.params.category);
	const categoryId = category ? category.id : null;
	const filteredPosts = categoryId ? posts.filter(post => post.categories.indexOf(categoryId) !== -1) : [...posts];
	console.log('filtered posts', filteredPosts);
	const toShow = [];
	const currIndex = match.params.index ? parseInt(match.params.index - 1) * PER_PAGE : 0;
	const maxIndex = filteredPosts.length - 1;
	for (let i = currIndex; i <= Math.min(currIndex + PER_PAGE - 1, maxIndex); i++) {
		toShow.push(filteredPosts[i]);
	}
	const excerptsJSX = toShow.map((post, index) => (
		<React.Fragment key={index}>
			<Excerpt post={post} rootLink="/post" />
			{index < toShow.length - 1 && (
				<>
					<Space height="30px" />
					<Divider />
					<Space height="30px" />
				</>
			)}
		</React.Fragment>
	));
	return (
		<Grid container spacing={3}>
			<Helmet>
				<title>Last Posts</title>
				<meta name="description" content="See the last posts" />
			</Helmet>
			{!loading ? (
				<>
					<Grid item xs={12} md={9}>
						<main>
							{filteredPosts.length > 0 && (categoryId || !match.params.category) ? (
								<>
									{excerptsJSX}
									<Pagination
										perPage={PER_PAGE}
										current={match.params.index ? parseInt(match.params.index) : 1}
										total={filteredPosts.length}
										limit={3}
										root={
											match.params.category ? `/posts/${match.params.category}/` : '/posts/page/'
										}
									/>
								</>
							) : (
								<h1>Pas de publications trouvées</h1>
							)}
						</main>
					</Grid>
					<Grid item xs={12} md={3}>
						<Sidebar />
					</Grid>
				</>
			) : (
				<CircularProgress size={theme.circularProgressSize} />
			)}
		</Grid>
	);
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts,
		categories: state.categories.categories,
		loading: state.status.postsLoading
	};
};

export default connect(mapStateToProps, null)(PostsPage);

//dangerouslySetInnerHTML={{__html: post.content.rendered}}
//props.match.params.index
