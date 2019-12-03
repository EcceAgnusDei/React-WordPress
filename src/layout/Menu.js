import React from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';

import Space from 'elements/Space';

const MenuItem = styled.li`
	list-style-type: none;
	font-family: ${props => props.theme.font.sans}, sans-serif;
	a {
		text-decoration: none;
		text-transform: uppercase;
		color: ${props => props.theme.black};
		font-size: 0.9em;
		margin-left: 12px;
		&:hover {
			color: ${props => props.theme.primary};
		}
	}
	.active {
		color: ${props => props.theme.primary};
	}
`;

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
	& ul {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: ${props => (props.vertical ? 'space-around' : 'space-between')};
		${props =>
			props.vertical &&
			`
			flex-direction: column;
			width: 100%;
		`}
	}
`;

function Menu({ children, vertical }) {
	const menuJSX = children.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<MenuItem>{item}</MenuItem>
				{vertical && <Space />}
			</React.Fragment>
		);
	});

	return (
		<Hidden smDown={!vertical}>
			<StyledNav vertical={vertical}>
				<ul>{menuJSX}</ul>
			</StyledNav>
		</Hidden>
	);
}

export default Menu;
