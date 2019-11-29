import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';

import Sidebar from 'layout/Sidebar';
import { getBySlug } from 'actions/postActions.js';
import NotFound from 'pages/NotFound.js';
import Separator from 'elements/Separator';
import Space from 'elements/Space';
import WPContentContainer from 'elements/WPContentContainer';

import PostHeader from './PostHeader';

function Post({ post, loading, match, getPost, allCategories }) {
	let postCategories = post.id ? allCategories.filter(item => post.categories.indexOf(item.id) != -1) : [];

	useEffect(() => {
		if (!loading) {
			getPost(match.params.slug);
		}
	}, [loading]);

	return (
		<>
			{loading ? (
				<h2>Loading...</h2>
			) : post.id ? (
				<Grid container spacing={3}>
					<Helmet>
						<title>{post.title.rendered}</title>
						{post.acf && post.acf.meta_description && (
							<meta name="description" content={post.acf.meta_description} />
						)}
					</Helmet>
					<PostHeader
						title={post.title.rendered}
						author={post.author_name}
						date={post.date}
						categories={postCategories}
					/>
					<Separator />
					<Space />
					<Grid container spacing={3}>
						<Grid item xs={12} md={9}>
							<WPContentContainer
								dangerouslySetInnerHTML={{ __html: post.content.rendered }}
							></WPContentContainer>
						</Grid>
						<Grid item xs={12} md={3}>
							<Sidebar />
						</Grid>
					</Grid>
				</Grid>
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
