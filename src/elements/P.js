import styled from 'styled-components';

const P = styled.p`
	text-align: justify;
	font-family: ${props => props.theme.font.sans}, sans-serif;
	font-size: ${props => props.size}rem;
	margin: ${props => props.m * props.theme.marginScale}px 0px;
`;

P.defaultProps = {
	size: 'inherit',
	m: 1
};

export default P;
