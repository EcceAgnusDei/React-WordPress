import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import WPParagraphWrapper from 'elements/WPParagraphWrapper';
import { CONSTANTS } from 'config';

import PostsSupplier from './PostsSupplier.js';
import WidgetPost from './WidgetPost.js';
import WidgetHeader from './WidgetHeader.js';

const StyledImg = styled.img`
	display: block;
	width: 100%;
`;

function LastPostsExtendedWidget({ number, variant }) {
	return (
		<PostsSupplier
			filter={variant}
			render={(posts, currentPost, medias, title) => {
				const toShowJSX = posts.slice(0, number).map((post, index) => {
					const media = medias.find(media => media.id === post.featured_media);
					const img = media && (media.media_details.sizes.medium_large || media.media_details.sizes.medium);
					return (
						<Grid item xs={12} sm={6} md={4} lg={4} key={index}>
							<NavLink to={`/post/${post.slug}`}>
								<WidgetPost media={media} post={post} centredTitle />
							</NavLink>
						</Grid>
					);
				});

				return (
					<>
						<WidgetHeader>{title}</WidgetHeader>
						<Grid container spacing={0}>
							{toShowJSX}
						</Grid>
					</>
				);
			}}
		/>
	);
}

export default LastPostsExtendedWidget;
