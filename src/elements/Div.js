import styled from 'styled-components';

const Div = styled.div`
	padding: ${props => (isNaN(props.p) ? props.p : props.p * props.theme.marginScale + 'px')}
	margin: ${props => (isNaN(props.m) ? props.m : props.m * props.theme.marginScale + 'px')}

	${props =>
		props.centred &&
		`
		display: flex;
		justify-content: center;
	`}
`;

Div.defaultProps = {
	p: 0,
	m: 0
};

export default Div;
