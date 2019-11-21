import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import FlexContainer from 'elements/FlexContainer';
import Container from '@material-ui/core/Container';

import Menu from './Menu';

const StyledHeader = styled.header`
	min-height: 70px;
	width: 100%;
	box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	position: fixed; 
	z-index: 500;
	background-color: ${props => props.theme.light};
`;

function Header({brand, children}) {
	let menuJSX = children.map((item, index) => 
		<div key={index}>
			{item}
		</div>)

	return (
		<StyledHeader>
			<Container>
				<FlexContainer>
				{brand &&
					<NavLink to="/">
						{brand}
					</NavLink>}
					<Menu>
						{children}
					</Menu>
				</FlexContainer>
			</Container>
      	</StyledHeader>
	);
}

export default Header;