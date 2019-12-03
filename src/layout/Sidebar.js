import React, { useState } from 'react';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import Categories from 'widgets/CategoriesWidget';
import LastPosts from 'widgets/LastPostsWidget';

import SideBarButton from './SideBarButton';

import theme from 'theme';
import AppWrapper from 'AppWrapper';

const StyledDiv = styled(AppWrapper)`
	width: 320px;
	padding: 12px;
`;

function Sidebar() {
	const [isOpen, toggleDrawer] = useState(false);
	return (
		<>
			<Hidden smDown>
				<LastPosts />
				<Categories />
			</Hidden>
			<Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
				<StyledDiv onClick={() => toggleDrawer(false)}>
					<LastPosts />
					<Categories />
				</StyledDiv>
			</Drawer>
			<Hidden mdUp>
				<SideBarButton onClick={() => toggleDrawer(true)} />
			</Hidden>
		</>
	);
}

export default Sidebar;
