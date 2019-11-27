import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import FlexContainer from 'elements/FlexContainer';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MuiMenu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

import Menu from './Menu';
import Logo from './Logo';

const StyledHeader = styled.header`
	min-height: ${props => props.theme.headerHeight + 'px'};
	width: 100%;
	box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
	display: flex;
	align-items: center;
	position: fixed; 
	z-index: 500;
	background-color: ${props => props.theme.light};
`;

function Header({brand, children}) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const menuJSX = children.map((item, index) => (
		<MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
	))

	return (
		<StyledHeader>
			<Container>
				<FlexContainer>
				{brand &&
					<Logo>
						{brand}
					</Logo>}
					<Hidden smDown>
						<Menu>
							{children}
						</Menu>
					</Hidden>
					<Hidden mdUp>
						<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
							<MenuIcon fontSize="large" color='primary'/>
						</IconButton>
						<MuiMenu 
							id="simple-menu"
					        anchorEl={anchorEl}
					        keepMounted
					        open={Boolean(anchorEl)}
					        onClose={handleClose}
					    >
							{menuJSX}
						</MuiMenu>
					</Hidden>
				</FlexContainer>
			</Container>
      	</StyledHeader>
	);
}

export default Header;