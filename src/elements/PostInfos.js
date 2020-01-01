import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TimeIcon from '@material-ui/icons/AccessTime';
import PenIcon from '@material-ui/icons/Create';
import TagIcon from '@material-ui/icons/LocalOffer';
import EyeIcon from '@material-ui/icons/Visibility';

import Span from 'elements/Span';
import Div from 'elements/Div';
import Date from 'elements/DatePresentational';
import { intersperse } from 'utils/utils';

const StyledDiv = styled(Div)`
	font-size: 0.8rem;
	color: ${props => props.theme.grey};
`;

function PostInfos({ post, author, allCategories, views, noAuthor, noCategory, noDate, noViews, ...otherProps }) {
	let postCategories = allCategories ? allCategories.filter(item => post.categories.indexOf(item.id) != -1) : [];
	const infosJSX = [];
	const categoriesName = postCategories.map((cat, index) => (
		<Span align="middle" key={index}>
			{' ' + cat.name}
		</Span>
	));

	let count = 1;
	while (count < categoriesName.length) {
		categoriesName.splice(
			count,
			0,
			<Span align="middle" key={777 + count}>
				,
			</Span>
		);
		count += 2;
	}

	if (!noAuthor)
		infosJSX.push(
			<React.Fragment key={1}>
				<PenIcon fontSize="small" />
				<Span align="middle"> {author}</Span>
			</React.Fragment>
		);
	if (!noDate)
		infosJSX.push(
			<React.Fragment key={2}>
				<TimeIcon fontSize="small" />
				<Span italic align="middle">
					{' '}
					<Date date={post.date} fontSize="small" />
				</Span>
			</React.Fragment>
		);
	if (!noCategory)
		infosJSX.push(
			<React.Fragment key={3}>
				<TagIcon fontSize="small" />
				{categoriesName}
			</React.Fragment>
		);
	if (!noViews && views)
		infosJSX.push(
			<React.Fragment key={4}>
				<EyeIcon fontSize="small" /> {views}
			</React.Fragment>
		);

	return (
		<StyledDiv {...otherProps}>
			<div>{intersperse(infosJSX, ' - ')}</div>
		</StyledDiv>
	);
}

const mapStateToProps = (state, { post }) => {
	return {
		allCategories: state.posts.categories,
		author: state.posts.users.length > 0 && state.posts.users.find(user => user.id === post.author).name,
		views: state.posts.views[post.id]
	};
};

export default connect(mapStateToProps, null)(PostInfos);
