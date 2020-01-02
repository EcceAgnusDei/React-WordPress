import styled from 'styled-components';

const Mask = styled.div`
	height: ${props => props.height};
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background: linear-gradient(${props => props.theme[props.color] + '0A, ' + props.theme[props.color] + 'FF'});
`;

Mask.defaultProps = {
	height: '100px',
	color: 'light'
};

export default Mask;
