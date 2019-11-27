import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledDiv = styled.div`
	font-family: 'Cormorant Garamond', serif;
	font-size: 32px;
	a
	{
		color: ${props => props.theme.black};
	}
`;

function Logo({children}) {
	return (
		<StyledDiv>
			<NavLink to="/">
				{children}
			</NavLink>
		</StyledDiv>
	);
}

export default Logo;