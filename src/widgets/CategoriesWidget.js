import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import WidgetHeader from './WidgetHeader';
import WidgetWrapper from './WidgetWrapper.js';

function CategoriesWidget({ categories }) {
	const categoriesJSX = categories.map((cat, index) => (
		<React.Fragment key={index}>
			<NavLink to={`/posts/${cat.slug}`} className="black-link">
				<ListItem button>{cat.name}</ListItem>
			</NavLink>
			{index < categories.length - 1 && <Divider />}
		</React.Fragment>
	));
	return (
		<WidgetWrapper>
			<WidgetHeader>les catégories</WidgetHeader>
			<List>{categoriesJSX}</List>
		</WidgetWrapper>
	);
}

const mapStateToProps = state => {
	return {
		categories: state.categories.categories
	};
};

export default connect(mapStateToProps, null)(CategoriesWidget);
