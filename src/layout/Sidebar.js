import React, { useState } from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';

import Categories from 'widgets/CategoriesWidget';
import LastPosts from 'widgets/LastPostsWidget';
import ArchivesWidget from 'widgets/ArchivesWidget';
import Space from 'elements/Space';

import Drawer from 'elements/Drawer';
import theme from 'theme';
import AppWrapper from 'AppWrapper';

import SideBarButton from './SideBarButton';

function Sidebar() {
	const [isOpen, toggleDrawer] = useState(false);
	const Content = (
		<>
			<LastPosts />
			<LastPosts variant="mostPopular" />
			<LastPosts variant="sameCategory" />
			<LastPosts variant="sameAuthor" />
			<Categories />
			<ArchivesWidget />
		</>
	);
	return (
		<>
			<Hidden smDown>{Content}</Hidden>
			<Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
				{Content}
			</Drawer>
			<Hidden mdUp>
				<SideBarButton onClick={() => toggleDrawer(true)} />
			</Hidden>
		</>
	);
}

export default Sidebar;
