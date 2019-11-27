import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	color: ${props => props.theme.primary};
	margin: ${props => props.theme.marginScale * props.m + 'px'} 0px;
	font-family: ${props => props.theme.font.serif}, serif;
`;

export default H1