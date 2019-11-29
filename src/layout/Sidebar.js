import React from 'react';
import styled from 'styled-components';

import Categories from 'widgets/CategoriesWidget';
import LastPosts from 'widgets/LastPostsWidget';

const StyledDiv = styled.div`
	//border: cyan 1px dashed;
	padding: 0;
`;

function Sidebar() {
	return (
		<StyledDiv>
			<LastPosts />
			<Categories />
		</StyledDiv>
	);
}

export default Sidebar;
