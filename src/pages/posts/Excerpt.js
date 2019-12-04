import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Link from 'elements/Link';
import { H2 } from 'elements/H';
import P from 'elements/P';
import WPContentContainer from 'elements/WPContentContainer';
import PostInfos from 'elements/PostInfos';
import WPParagraphWrapper from 'elements/WPParagraphWrapper';
import Image from 'elements/Image';

import PostHeader from './PostHeader';

const ExcerptContainer = styled.div`
	display: flex;
`;

const StyledImage = styled(Image)`
	display: ${props => (props.fillSpace ? 'block' : 'table')}
	${props => props.fillSpace && 'width: 100%;'}
	height: ${props => props.height};
	@media (max-width: ${props => props.theme.md}) {
		height: auto;
		max-height: 480px;
	}
`;

function Excerpt({ allCategories, post, rootLink }) {
	const { title, img, excerpt, slug, categories, author_name, date } = post;
	const contentRef = useRef(null);
	const [imageH, setImageH] = useState('auto');
	const postCategories = allCategories.filter(item => categories.indexOf(item.id) != -1);
	const spacing = 2;

	useEffect(() => {
		// console.log('***********Excerpt did mount************');
		// console.log('*****Refs**********', contentRef.current.getBoundingClientRect());
		setImageH(contentRef.current.getBoundingClientRect().height - spacing * 8 + 'px');
	});

	return (
		<Grid container spacing={spacing} alignItems="flex-start">
			{img && (
				<Grid item xs={12} md={5}>
					<StyledImage src={img.large || img.full} alt={img.alt_text} height={imageH} fillSpace />
				</Grid>
			)}
			<Grid item xs={12} md={img ? 7 : 12} ref={contentRef}>
				<PostInfos author={author_name} date={date} categories={postCategories} />
				<Link>
					<NavLink to={`${rootLink}/${slug}`}>
						<H2 mb={2} mt={2}>
							{title.rendered}
						</H2>
					</NavLink>
				</Link>
				<WPParagraphWrapper mb={0} dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
			</Grid>
		</Grid>
	);
}

const mapStateToProps = state => {
	return {
		allCategories: state.categories.categories
	};
};

export default connect(mapStateToProps, null)(Excerpt);
