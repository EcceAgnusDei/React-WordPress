import React from 'react';
import styled from 'styled-components';

const Underliner = styled.div`
	background-color: ${props => props.theme[props.color]};
	height: ${props => props.height};
	width: ${props => props.width};
	margin-top: ${props => props.mt * props.theme.marginScale}px;
	margin-bottom: ${props => props.mb * props.theme.marginScale}px;
`;

Underliner.defaultProps = {
	color: 'primary',
	height: '3px',
	width: '36px',
	mb: 1,
	mt: 1
};

export default Underliner;
