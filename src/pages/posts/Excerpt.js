import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Link from 'elements/Link';
import { H2 } from 'elements/H';
import P from 'elements/P';
import WPContentContainer from 'elements/WPContentContainer';
import PostInfos from 'elements/PostInfos';
import WPParagraphWrapper from 'elements/WPParagraphWrapper';

import PostHeader from './PostHeader';

function Excerpt({ allCategories, post, rootLink }) {
	const { title, img, excerpt, slug, categories, author_name, date } = post;
	const postCategories = allCategories.filter(item => categories.indexOf(item.id) != -1);

	return (
		<div>
			{img && <img src={img.medium} alt={img.alt_text} />}
			<Link>
				<NavLink to={`${rootLink}/${slug}`}>
					<H2 m={0}>{title.rendered}</H2>
				</NavLink>
			</Link>
			<PostInfos author={author_name} date={date} categories={postCategories} />
			<WPParagraphWrapper mb={0} dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		allCategories: state.categories.categories
	};
};

export default connect(mapStateToProps, null)(Excerpt);
