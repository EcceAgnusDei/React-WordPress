import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';

import Sidebar from 'layout/Sidebar';
import theme from 'theme';
import { CONSTANTS } from 'config';

import Pagination from './Pagination';
import Excerpt from './Excerpt.js';

const ExcerptListContainer = styled.div`
	.MuiListItem-root {
		padding-top: 32px;
		padding-bottom: 32px;
	}
`;

function PostsPage({ posts, match, categories, loading }) {
	const PER_PAGE = CONSTANTS.POSTS_PER_PAGE;

	const category = categories.find(cat => cat.slug === match.params.category);
	const categoryId = category ? category.id : null;
	const filteredPosts = categoryId
		? posts.filter(post => post.categories.indexOf(categoryId) !== -1)
		: match.params.year
		? match.params.month
			? posts.filter(
					post => post.date.slice(0, 4) === match.params.year && post.date.slice(5, 7) === match.params.month
			  )
			: posts.filter(post => post.date.slice(0, 4) === match.params.year)
		: [...posts];

	const toShow = [];
	const currIndex = match.params.index ? parseInt(match.params.index - 1) * PER_PAGE : 0;
	const maxIndex = filteredPosts.length - 1;
	for (let i = currIndex; i <= Math.min(currIndex + PER_PAGE - 1, maxIndex); i++) {
		toShow.push(filteredPosts[i]);
	}
	const excerptsJSX = toShow.map((post, index) => <Excerpt post={post} rootLink="/post" key={index} />);

	const paginationRoot = match.params.category
		? `/posts/${match.params.category}/`
		: match.params.year
		? match.params.month
			? `/posts/archives/${match.params.year}/${match.params.month}/page/`
			: `/posts/archives/${match.params.year}/page/`
		: '/posts/page/';

	return (
		<Grid container spacing={2}>
			<Helmet>
				<title>Last Posts</title>
				<meta name="description" content="See the last posts" />
			</Helmet>
			{!loading ? (
				<>
					<Grid item xs={12} md={9}>
						<main>
							{filteredPosts.length > 0 && (categoryId || !match.params.category) ? (
								<ExcerptListContainer>
									<List disablePadding>{excerptsJSX}</List>
									<Pagination
										perPage={PER_PAGE}
										current={match.params.index ? parseInt(match.params.index) : 1}
										total={filteredPosts.length}
										limit={3}
										root={paginationRoot}
									/>
								</ExcerptListContainer>
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
		categories: state.posts.categories,
		loading: state.status.postsLoading
	};
};

export default connect(mapStateToProps, null)(PostsPage);

//dangerouslySetInnerHTML={{__html: post.content.rendered}}
//props.match.params.index
