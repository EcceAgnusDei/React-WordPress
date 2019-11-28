import React from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';

const MenuItem = styled.li`
	list-style-type: none;
	font-family: ${props => props.theme.font.sans}, sans-serif;
	a {
		text-decoration: none;
		text-transform: uppercase;
		color: ${props => (props.current ? props.theme.primary : props.theme.black)};
		font-size: 0.9em;
		transition: all 200ms linear;
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
	${props => props.vertical && 'height: 100%;'}
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
			height: 100%;
			width: 100%;
		`}
	}
`;

function Menu({ children, vertical }) {
	const menuJSX = children.map((item, index) => {
		return (
			<MenuItem key={index} current={false}>
				{item}
			</MenuItem>
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
