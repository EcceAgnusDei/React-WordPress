import styled from 'styled-components';

const Separator = styled.div`
	height: 1px;
	width: 100%;
	margin: ${props => props.theme.marginScale * props.m + 'px'} 0;
	background-color: transparent;
	box-shadow: 0px 1px 3px 0px ${props => props.theme.primary};
`;

Separator.defaultProps = {
	m: 2
};

export default Separator;
