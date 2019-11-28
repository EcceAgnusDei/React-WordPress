import styled from 'styled-components'

const Span = styled.span`
	${props => props.italic && 'font-style: italic'}
	${props => props.align && `vertical-align: ${props.align}`}
	font-family: ${props => props.theme.font.sans}, sans-serif;
`;

export default Span