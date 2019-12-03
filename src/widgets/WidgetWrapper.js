import styled from 'styled-components';

const WidgetWrapper = styled.div`
	margin-bottom: ${props => props.theme.marginScale * 4}px;
	.MuiListItem-button {
		padding-left: 7px;
		padding-right: 7px;
	}
`;

export default WidgetWrapper;
