import styled from 'styled-components';

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	margin: auto;
	object-fit: cover;
	height: ${props => props.height};
	display: ${props => (props.fillSpace ? 'block' : 'table')};
	${props => props.fillSpace && 'width: 100%;'}
`;

Image.defaultProps = {
	height: 'auto'
};

export default Image;
