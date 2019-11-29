import React from 'react';
import styled from 'styled-components';

import LastPosts from '../widgets/LastPostsWidget.js';

const StyledDiv = styled.div`
	//border: cyan 1px dashed;
	padding: 0;
`;

function Sidebar() {
	return (
		<StyledDiv>
			<LastPosts number={3} />
		</StyledDiv>
	);
}

export default Sidebar;
