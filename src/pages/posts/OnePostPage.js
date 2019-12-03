import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';

import Sidebar from 'layout/Sidebar';
import { getBySlug } from 'actions/postActions.js';
import NotFound from 'pages/NotFound.js';
import Space from 'elements/Space';
import WPContentContainer from 'elements/WPContentContainer';
import theme from 'theme';

import PostHeader from './PostHeader';

const StyledImg = styled.img`
	max-width: 100%;
	display: table;
	margin: auto;
`;

function Post({ post, loading, match, getPost, allCategories }) {
	let postCategories = post.id ? allCategories.filter(item => post.categories.indexOf(item.id) != -1) : [];
	const parsedExcerpt = post.excerpt ? post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '') : '';
	console.log(parsedExcerpt);
	const metaDescription =
		(post.acf && post.acf.meta_description) ||
		(post.excerpt && post.excerpt.rendered.slice(3, Math.max(150, post.excerpt.rendered.length)));

	useEffect(() => {
		if (!loading) {
			getPost(match.params.slug);
		}
	}, [loading, match]);

	return (
		<>
			{loading ? (
				<CircularProgress size={theme.circularProgressSize} />
			) : post.id ? (
				<>
					<Helmet>
						<title>{post.title.rendered}</title>
						<meta name="description" content={metaDescription} />
					</Helmet>
					<PostHeader
						title={post.title.rendered}
						author={post.author_name}
						date={post.date}
						categories={postCategories}
					/>
					<Space />
					<Divider />
					<Space height="30px" />
					<Grid container spacing={2}>
						<Grid item xs={12} md={8} lg={9}>
							<main>
								{post.img && <StyledImg src={post.img.large || post.img.full} />}
								<WPContentContainer
									dangerouslySetInnerHTML={{ __html: post.content.rendered }}
								></WPContentContainer>
							</main>
						</Grid>
						<Grid item xs={12} md={4} lg={3}>
							<Sidebar />
						</Grid>
					</Grid>
				</>
			) : (
				<NotFound />
			)}
		</>
	);
}

const mapStateToProps = state => {
	return {
		post: state.posts.post,
		posts: state.posts.posts,
		loading: state.status.postsLoading,
		allCategories: state.categories.categories
	};
};

const mapDispacthToProps = dispatch => {
	return {
		getPost: slug => dispatch(getBySlug(slug))
	};
};

export default connect(mapStateToProps, mapDispacthToProps)(Post);
