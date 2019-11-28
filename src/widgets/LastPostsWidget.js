import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Separator from 'elements/Separator';
import Link from 'elements/Link';
import { H2 } from 'elements/H';
import P from 'elements/P';

const Ellipsis = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0 12px;

	a {
		color: ${props => props.theme.black};
	}

	a:hover {
		color: ${props => props.theme.primary};
	}
`;

const StyledImg = styled.img`
	margin: auto;
	display: table;
`;

const FirstPost = ({ post: { img, title, excerpt, slug } }) => {
	return (
		<div>
			{img && <StyledImg src={img.small} alt={img.alt_text} />}
			<Link color="primary">
				<NavLink to={`/posts/${slug}`}>{title.rendered}</NavLink>
			</Link>
			<P dangerouslySetInnerHTML={{ __html: excerpt.rendered }} size="0.9" />
		</div>
	);
};

function LastPostsWidget({ number, allPosts, currentPostId, loading }) {
	console.log(allPosts);
	const lastPostsJSX = allPosts.slice(1, number).map((post, index) => (
		<React.Fragment key={index}>
			<Ellipsis>
				<NavLink to={`/posts/${post.slug}`}>{post.title.rendered}</NavLink>
			</Ellipsis>
			<Separator m={1} />
		</React.Fragment>
	));

	return loading ? null : (
		<div>
			<FirstPost post={allPosts[0]} />
			<Separator m={1} />
			{lastPostsJSX}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		allPosts: state.posts.posts,
		loading: state.status.postsLoading
	};
};

export default connect(mapStateToProps, null)(LastPostsWidget);
