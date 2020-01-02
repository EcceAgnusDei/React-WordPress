import React, { useState } from 'react';

import Hidden from '@material-ui/core/Hidden';

import Categories from 'widgets/CategoriesWidget';
import LastPosts from 'widgets/LastPostsWidget';
import ArchivesWidget from 'widgets/ArchivesWidget';

import Drawer from 'elements/Drawer';

import SideBarButton from './SideBarButton';

function Sidebar() {
	const [isOpen, toggleDrawer] = useState(false);
	const Content = ({ inDrawer }) => (
		<>
			<LastPosts />
			<LastPosts variant="mostPopular" />
			<LastPosts variant="sameCategory" />
			<LastPosts variant="sameAuthor" />
			<Categories />
			<ArchivesWidget expanded={inDrawer} />
		</>
	);
	return (
		<>
			<Hidden smDown>
				<Content />
			</Hidden>
			<Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
				<Content inDrawer />
			</Drawer>
			<Hidden mdUp>
				<SideBarButton onClick={() => toggleDrawer(true)} />
			</Hidden>
		</>
	);
}

export default Sidebar;
