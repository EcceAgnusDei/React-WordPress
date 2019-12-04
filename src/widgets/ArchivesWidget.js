import React from 'react';
import { NavLink } from 'react-router-dom';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { months } from 'utils/utils';
import { CONSTANTS } from 'config';

import WidgetHeader from './WidgetHeader';
import WidgetWrapper from './WidgetWrapper';

function ArchivesWidget() {
	const currentYear = new Date().getFullYear();
	const years = [];
	for (let i = CONSTANTS.STARTING_YEAR; i <= currentYear; i++) {
		years.push(i);
	}

	const archivesJSX = years.map(year => {
		const monthJSX = months.map((month, index) => {
			console.log(index.toString());
			const correctedIndex = index + 1;
			const niceMonth =
				correctedIndex.toString().length < 2 ? '0'.concat(correctedIndex) : correctedIndex.toString();
			return <NavLink to={`/posts/archives/${year}/${niceMonth}`}>{month}</NavLink>;
		});
		return (
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
					{year}
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>{monthJSX}</ExpansionPanelDetails>
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

export default ArchivesWidget;
