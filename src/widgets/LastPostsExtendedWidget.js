import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import WPParagraphWrapper from 'elements/WPParagraphWrapper';
import { H2 } from 'elements/H';
import { CONSTANTS } from 'config';

import PostsSupplier from './PostsSupplier.js';
import WidgetPost from './WidgetPost.js';
import WidgetHeader from './WidgetHeader.js';

const StyledDiv = styled.div`
	background: url(${props => props.bg}) center no-repeat;
	background-size: cover;
	height: 300px;
`;

const Overlay = styled.div`
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
	padding: 7px;
	overflow: hidden;
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
								<H2 center>{post.title.rendered}</H2>
								<StyledDiv bg={img && img.source_url}>
									<Overlay>
										<WPParagraphWrapper
											mHeight={CONSTANTS.EXTENDED_WIDGET_IMG_HEIGHT}
											dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
											size="1"
										/>
									</Overlay>
								</StyledDiv>
							</NavLink>
						</Grid>
					);
				});

				return (
					<>
						<WidgetHeader>{title}</WidgetHeader>
						<Grid container spacing={3}>
							{toShowJSX}
						</Grid>
					</>
				);
			}}
		/>
	);
}

export default LastPostsExtendedWidget;
