import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
	height: 100%;
	display: flex;
	${props => props.column && 'flex-direction: column;'}
	justify-content: space-between;
	align-items: center;
`;

export default FlexContainer