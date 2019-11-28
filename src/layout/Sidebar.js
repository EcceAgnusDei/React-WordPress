import React from 'react';
import styled from 'styled-components';

import LastPosts from '../widgets/LastPostsWidget.js';

const StyledDiv = styled.div`
	min-width: 400px;
	border: cyan 1px dashed;
	padding: 0 12px;
`;

function Sidebar() {
	return (
		<StyledDiv>
			<LastPosts number={3} />
		</StyledDiv>
	);
}

export default Sidebar;
