import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

import Link from 'elements/Link';
import { H2 } from 'elements/H';
import P from 'elements/P';
import WPContentContainer from 'elements/WPContentContainer';
import PostInfos from 'elements/PostInfos';
import WPParagraphWrapper from 'elements/WPParagraphWrapper';
import Image from 'elements/Image';
import Space from 'elements/Space';
import ObjectFitImg from 'elements/ObjectFitImg';

import PostHeader from './PostHeader';

const StyledImage = styled(Image)`
	display: ${props => (props.fillSpace ? 'block' : 'table')}
	${props => props.fillSpace && 'width: 100%;'}
	height: ${props => props.height};
	@media (max-width: ${props => props.theme.md}) {
		height: auto;
		max-height: 480px;
	}
`;

function Excerpt({ allCategories, views, media, post, rootLink }) {
	const { title, excerpt, slug, categories, date } = post;
	const contentRef = useRef(null);
	const [imageH, setImageH] = useState('auto');
	const spacing = 2;
	const img =
		media &&
		((media.media_details.sizes.large && media.media_details.sizes.large.source_url) ||
			media.media_details.sizes.full.source_url);

	useEffect(() => {
		setImageH(contentRef.current.getBoundingClientRect().height - spacing * 8 + 'px');
	});

	return (
		<NavLink to={`${rootLink}/${slug}`}>
			<ListItem button divider>
				<Grid container spacing={spacing} alignItems="flex-start">
					{img && (
						<Grid item xs={12} md={5}>
							<ObjectFitImg src={img} alt={img.alt_text} height={imageH} fillSpace />
						</Grid>
					)}
					<Grid item xs={12} md={img ? 7 : 12} ref={contentRef}>
						<PostInfos post={post} />
						<H2 mb={2} mt={2}>
							{title.rendered}
						</H2>
						<WPParagraphWrapper mb={0} dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
					</Grid>
				</Grid>
			</ListItem>
		</NavLink>
	);
}

const mapStateToProps = (state, { post }) => {
	return {
		allCategories: state.posts.categories,
		views: state.posts.views[post.id],
		media: state.posts.medias.find(media => media.id === post.featured_media)
	};
};

export default connect(mapStateToProps, null)(Excerpt);
