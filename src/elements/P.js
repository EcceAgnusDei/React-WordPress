import styled from 'styled-components';

const P = styled.p`
	text-align: justify;
	font-family: ${props => props.theme.font.sans}, sans-serif;
	font-size: ${props => props.size}rem;
`;

P.defaultProps = {
	size: 'inherit'
};

export default P;
