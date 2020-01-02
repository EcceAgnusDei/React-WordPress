import styled from 'styled-components';

const Div = styled.div`
	padding: ${props => (isNaN(props.p) ? props.p : props.p * props.theme.marginScale + 'px')}
	margin: ${props => (isNaN(props.m) ? props.m : props.m * props.theme.marginScale + 'px')}
	color: ${props => props.theme[props.color]};
	${props =>
		props.centred &&
		`
		display: flex;
		justify-content: center;
	`}
	font-size: ${props => props.fontSize};
`;

Div.defaultProps = {
	p: 0,
	m: 0,
	color: 'black',
	fontSize: '1rem'
};

export default Div;
