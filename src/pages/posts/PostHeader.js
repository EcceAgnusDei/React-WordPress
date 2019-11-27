import React from 'react';
import styled from 'styled-components';

import TimeIcon from '@material-ui/icons/AccessTime';
import PenIcon from '@material-ui/icons/Create';

import H1 from 'elements/H1';
import Span from 'elements/Span';
import Date from 'elements/DatePresentational';

const StyledDiv = styled.div`
	font-size: 0.8rem;
	color: ${props => props.theme.grey};
`;

function PostHeader({ title, author, date }) {
	return (
		<div>
			<H1 m={0}>{title}</H1>
			<StyledDiv>
				<PenIcon fontSize="small"/>
				<Span align='middle'>{author}</Span>
				<Span align='middle'> - </Span>
				<TimeIcon fontSize="small" />
				<Span italic align='middle'><Date date={date} fontSize="small"/></Span>
			</StyledDiv>
		</div>
	);
}

export default PostHeader