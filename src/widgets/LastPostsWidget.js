import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

const FirstPost = ({ post: { img, title, excerpt, slug } }) => {
	const imageUrl = img ? (img.medium_large ? img.medium_large : img.medium ? img.medium : img.small) : null;
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
					{img && <StyledImg src={img.medium} alt={img.alt_text} />}
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

function LastPostsWidget({ number, allPosts, currentPost, loading }) {
	const filteredPosts = allPosts.filter(post => post.id !== currentPost.id);
	const lastPostsJSX = filteredPosts.slice(1, number).map((post, index) => (
		<React.Fragment key={index}>
			<ListItem button>
				<NavLink to={`/post/${post.slug}`} className="black-link small-font">
					{post.title.rendered}
				</NavLink>
			</ListItem>
			<Divider />
		</React.Fragment>
	));

	return (
		<WidgetWrapper>
			<WidgetHeader>les derniers articles</WidgetHeader>

			{loading ? null : (
				<>
					<Divider />
					<FirstPost post={filteredPosts[0]} />
					<Divider />
					<List disablePadding>{lastPostsJSX}</List>
				</>
			)}
		</WidgetWrapper>
	);
}

LastPostsWidget.defaultProps = {
	number: CONSTANTS.NB_POSTS_WIDGET
};

const mapStateToProps = state => {
	return {
		allPosts: state.posts.posts,
		loading: state.status.postsLoading,
		currentPost: state.posts.post
	};
};

export default connect(mapStateToProps, null)(LastPostsWidget);
