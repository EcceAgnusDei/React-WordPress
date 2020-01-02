import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import WPParagraph from 'elements/WPParagraph';
import { H2 } from 'elements/H';
import PostInfos from 'elements/PostInfos';
import Div from 'elements/Div';
import { CONSTANTS } from 'config';

import PostsSupplier from './PostsSupplier.js';
import WidgetHeader from './WidgetHeader.js';

const StyledDiv = styled.div`
	background: url(${props => props.bg}) center no-repeat;
	background-size: cover;
	height: 300px;
	overflow: hidden;
`;

const CardHeader = styled(Div)`
	${StyledDiv}:hover & {
		top: 0;
		transform: translateY(-100%);
	}
	transition: all 0.5s ease-out;
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	right: 0;
	left: 0;
`;

const CardParagraph = styled(Div)`
	${StyledDiv}:hover & {
		top: 0;
	}
	transition: all 0.5s ease-out;
	position: absolute;
	top: 100%;
	right: 0;
	left: 0;
`;

const Overlay = styled.div`
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
	overflow: hidden;
	position: relative;
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
							<Card>
								<NavLink to={`/post/${post.slug}`}>
									<StyledDiv bg={img && img.source_url}>
										<Overlay>
											<CardHeader p={1}>
												<H2 center shadow>
													{post.title.rendered}
												</H2>
												<PostInfos post={post} noAuthor noViews centred color="black" />
											</CardHeader>
											<CardParagraph>
												<WPParagraph
													maxHeight={CONSTANTS.EXTENDED_WIDGET_IMG_HEIGHT}
													content={post.excerpt.rendered}
													size="1"
													p={1}
												/>
											</CardParagraph>
										</Overlay>
									</StyledDiv>
								</NavLink>
							</Card>
						</Grid>
					);
				});

				return (
					<>
						<WidgetHeader>{title}</WidgetHeader>
						<Grid container spacing={3} justify="center">
							{toShowJSX}
						</Grid>
					</>
				);
			}}
		/>
	);
}

export default LastPostsExtendedWidget;
