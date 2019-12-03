import React from 'react';
import styled from 'styled-components';

import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const StyledFab = styled.div`
	position: fixed;
	z-index: 2;
	bottom: 30px;
	right: 70px;
`;

function SideBarButton({ onClick }) {
	return (
		<StyledFab>
			<Fab onClick={onClick}>
				<ChevronLeftIcon fontSize="large" color="primary" />
			</Fab>
		</StyledFab>
	);
}

export default SideBarButton;
