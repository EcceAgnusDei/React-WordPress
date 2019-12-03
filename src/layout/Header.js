import React, { useState } from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';
import FlexContainer from 'elements/FlexContainer';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import Drawer from 'elements/Drawer';
import Space from 'elements/Space';
import AppWrapper from 'AppWrapper';

import Menu from './Menu';
import Logo from './Logo';

const StyledHeader = styled.header`
	min-height: ${props => props.theme.headerHeight + 'px'};
	width: 100%;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	position: fixed;
	z-index: 2;
	background-color: ${props => props.theme.light};
`;

function Header({ brand, children }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [isOpen, toggleDrawer] = useState(false);

	return (
		<StyledHeader>
			<Container>
				<FlexContainer>
					{brand && <Logo>{brand}</Logo>}
					<Hidden smDown>
						<Menu>{children}</Menu>
					</Hidden>
					<Hidden mdUp>
						<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={() => toggleDrawer(true)}>
							<MenuIcon fontSize="large" color="primary" />
						</IconButton>
						<Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
							<Menu vertical>{children}</Menu>
						</Drawer>
					</Hidden>
				</FlexContainer>
			</Container>
		</StyledHeader>
	);
}

export default Header;
