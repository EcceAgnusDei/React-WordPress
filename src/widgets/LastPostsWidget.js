import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { H2 } from 'elements/H';
import P from 'elements/P';
import Mask from 'elements/Mask';
import WPParagraphWrapper from 'elements/WPParagraphWrapper';
import { CONSTANTS } from 'config';

import WidgetHeader from './WidgetHeader.js';
import WidgetWrapper from './WidgetWrapper.js';
import PostsSupplier from './PostsSupplier.js';

const StyledImg = styled.img`
	display: block;
	width: 100%;
`;

const StyledHeader = styled.div`
	text-transform: uppercase;
	margin-bottom: 0;
`;

const StyledH2 = styled(H2)`
	font-size: 1.1rem;
`;

const ExcerptContainer = styled.div`
	position: relative;
`;

const FirstPost = ({ post: { title, excerpt, slug }, media }) => {
	const img = media && (media.media_details.sizes.medium_large || media.media_details.sizes.medium);
	const wpParagraphRef = useRef(null);

	const [overflow, setOverflow] = useState(false);

	useEffect(() => {
		if (
			wpParagraphRef.current.children.item(0).getBoundingClientRect().height >
			CONSTANTS.LAST_POST_EXCERPT_MAX_HEIGHT
		) {
			setOverflow(true);
		} else {
			setOverflow(false);
		}
	});

	return (
		<ExcerptContainer>
			<ListItem button>
				<NavLink to={`/post/${slug}`} className="black-link">
					{media && <StyledImg src={img.source_url} alt={media.alt_text} />}
					<StyledH2 mt={1}>{title.rendered}</StyledH2>
					<WPParagraphWrapper
						mHeight={CONSTANTS.LAST_POST_EXCERPT_MAX_HEIGHT}
						dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
						ref={wpParagraphRef}
						size="0.8"
					/>
					{overflow && <Mask />}
				</NavLink>
			</ListItem>
		</ExcerptContainer>
	);
};

function LastPostsWidget({ number, variant }) {
	let title;

	switch (variant) {
		case 'mostPopular':
			title = 'les articles populaires';
			break;
		case 'sameCategory':
			title = 'dans la même catégory';
			break;
		case 'sameAuthor':
			title = 'du même auteur';
			break;
		default:
			title = 'les derniers articles';
	}

	return (
		<PostsSupplier
			filter={variant}
			render={(posts, currentPost, medias) => {
				const postsWithoutCurrent = posts.filter(post => post.id !== currentPost.id);
				const media = medias.find(media => media.id === postsWithoutCurrent[0].featured_media);
				const noRender = postsWithoutCurrent.length == 0;
				const toShowJSX = postsWithoutCurrent.slice(1, number).map((post, index) => (
					<ListItem button divider key={index}>
						<NavLink to={`/post/${post.slug}`} className="black-link small-font">
							{post.title.rendered}
						</NavLink>
					</ListItem>
				));
				return noRender ? null : (
					<WidgetWrapper>
						<WidgetHeader>{title}</WidgetHeader>
						<Divider />
						<FirstPost post={postsWithoutCurrent[0]} media={media} />
						<Divider />
						<List disablePadding>{toShowJSX}</List>
					</WidgetWrapper>
				);
			}}
		/>
	);
}

LastPostsWidget.defaultProps = {
	number: CONSTANTS.NB_POSTS_WIDGET
};

export default LastPostsWidget;
