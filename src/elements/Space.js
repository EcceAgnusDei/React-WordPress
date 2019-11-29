import styled from 'styled-components';

const Space = styled.div`
	width: 100%;
	background-color: transparent;
	height: ${props => (props.height ? props.height : '15px')};
`;

export default Space;
