import React from 'react';
import styled from 'styled-components';

import MuiDrawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRightAlt';

import AppWrapper from 'AppWrapper';
import Space from 'elements/Space';

const StyledDiv = styled(AppWrapper)`
	width: 320px;
	padding: 12px;
`;

function Drawer({ children, onClose, ...otherProps }) {
	return (
		<MuiDrawer {...otherProps} onClose={onClose}>
			<StyledDiv onClick={onClose}>
				<Button variant="contained" size="small">
					<ArrowRightIcon color="primary" />
				</Button>
				<Space />
				{children}
			</StyledDiv>
		</MuiDrawer>
	);
}

export default Drawer;
