import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

import { H2 } from 'elements/H';
import PostInfos from 'elements/PostInfos';
import WPParagraph from 'elements/WPParagraph';
import Image from 'elements/Image';
import { CONSTANTS } from 'config';

const StyledImage = styled(Image)`
	@media (max-width: ${props => props.theme.md}) {
		height: auto;
		max-height: 480px;
	}
`;

//Utiliser screenSize pour redéfinir la hauteur de l'image sur petit écran, dans le cas de l'utilisation de ObjectFitImg
function Excerpt({ allCategories, views, media, post, rootLink }) {
	const { title, excerpt, slug } = post;
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
							<StyledImage
								src={img}
								alt={media.alt_text}
								height={imageH}
								fillSpace={CONSTANTS.EXCERPT_IMAGE_FULL_WIDTH}
							/>
						</Grid>
					)}
					<Grid item xs={12} md={img ? 7 : 12} ref={contentRef}>
						<PostInfos post={post} />
						<H2 mb={2} mt={2}>
							{title.rendered}
						</H2>
						<WPParagraph mb={0} content={excerpt.rendered} />
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
