import React, { useState } from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';

import Categories from 'widgets/CategoriesWidget';
import LastPosts from 'widgets/LastPostsWidget';
import Space from 'elements/Space';

import Drawer from 'elements/Drawer';
import theme from 'theme';
import AppWrapper from 'AppWrapper';

import SideBarButton from './SideBarButton';

function Sidebar() {
	const [isOpen, toggleDrawer] = useState(false);
	return (
		<>
			<Hidden smDown>
				<LastPosts />
				<Categories />
			</Hidden>
			<Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
				<LastPosts />
				<Categories />
			</Drawer>
			<Hidden mdUp>
				<SideBarButton onClick={() => toggleDrawer(true)} />
			</Hidden>
		</>
	);
}

export default Sidebar;
