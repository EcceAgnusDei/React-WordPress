import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { months, parseDate } from 'utils/utils';
import { CONSTANTS } from 'config';

import WidgetHeader from './WidgetHeader';
import WidgetWrapper from './WidgetWrapper';

const nicerMonth = num => (num.toString().length < 2 ? '0'.concat(num) : num.toString());

function ArchivesWidget({ posts, expanded }) {
	const currentYear = new Date().getFullYear();
	const years = [];
	for (let i = CONSTANTS.STARTING_YEAR; i <= currentYear; i++) {
		years.push(i);
	}

	const archivesJSX = years.map((year, index) => {
		const postsDate = posts
			.filter(post => parseDate(post.date).year == year)
			.map(post => parseDate(post.date).month);
		const parsedMonths = months.filter((month, index) => postsDate.indexOf(nicerMonth(index + 1)) != -1);

		const monthJSX = parsedMonths.map((month, index) => {
			const correctedIndex = index + 1;
			return (
				<NavLink
					to={`/posts/archives/${year}/${nicerMonth(months.indexOf(month) + 1)}`}
					className="black-link"
					key={index}
				>
					<ListItem button divider>
						{month}
					</ListItem>
				</NavLink>
			);
		});
		return (
			<ExpansionPanel key={index} expanded={expanded}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
					{year}
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<List disablePadding>{monthJSX}</List>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	});

	return (
		<WidgetWrapper>
			<WidgetHeader>archives</WidgetHeader>
			{archivesJSX}
		</WidgetWrapper>
	);
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	};
};

export default connect(mapStateToProps, null)(ArchivesWidget);
