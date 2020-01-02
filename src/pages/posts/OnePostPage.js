import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import ProgressiveImage from 'react-progressive-image';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';

import Sidebar from 'layout/Sidebar';
import { getBySlug } from 'actions/postActions.js';
import NotFound from 'pages/NotFound.js';
import Space from 'elements/Space';
import Image from 'elements/Image';
import WPContentContainer from 'elements/WPContentContainer';
import theme from 'theme';

import PostHeader from './PostHeader';

function Post({ post, loading, match, getPost, media }) {
	//const parsedExcerpt = post.excerpt ? post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '') : '';
	const metaDescription =
		(post && post.acf && post.acf.meta_description) ||
		(post && post.excerpt && post.excerpt.rendered.slice(3, Math.max(150, post.excerpt.rendered.length)));
	const img = media && (media.media_details.sizes.large || media.media_details.sizes.large.full);

	useEffect(() => {
		if (!loading) {
			getPost(match.params.slug);
		}
	}, [loading, match]);

	useEffect(() => {
		if (post) {
			fetch('/react-api/updatePostStats.php', {
				method: 'POST',
				header: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id: post.id
				})
			});
		}
	}, [post]);

	return (
		<>
			{loading ? (
				<CircularProgress size={theme.circularProgressSize} />
			) : post ? (
				<>
					<Helmet>
						<title>{post.title.rendered}</title>
						<meta name="description" content={metaDescription} />
					</Helmet>
					<PostHeader post={post} />
					<Space />
					{img && (
						//<Image src={img.source_url} fillSpace />
						<ProgressiveImage
							src={img.source_url}
							placeholder={media.media_details.sizes.medium.source_url}
						>
							{src => <Image src={src} fillSpace />}
						</ProgressiveImage>
					)}
					<Space />
					<Divider />
					<Space height="30px" />
					<Grid container spacing={2}>
						<Grid item xs={12} md={8} lg={9}>
							<main>
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

const mapStateToProps = (state, { match }) => {
	return {
		post: state.posts.posts.find(post => post.slug === match.params.slug),
		media: state.posts.medias.find(media => media.id === state.posts.post.featured_media),
		loading: state.status.postsLoading
	};
};

const mapDispacthToProps = dispatch => {
	return {
		getPost: slug => dispatch(getBySlug(slug))
	};
};

export default connect(mapStateToProps, mapDispacthToProps)(Post);
