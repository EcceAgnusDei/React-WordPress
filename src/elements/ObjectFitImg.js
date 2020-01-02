import styled from 'styled-components';

const ObjectFitImg = styled.div`
	height: ${props => props.height};
	width: ${props => props.width};
	background: no-repeat ${props => props.bgPosition} url(${props => props.src});
	background-size: cover;
`;

ObjectFitImg.defaultProps = {
	bgPosition: 'center',
	height: '100%',
	width: '100%'
};

export default ObjectFitImg;
