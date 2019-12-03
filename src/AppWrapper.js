import styled from 'styled-components';

const AppWrapper = styled.div`
	position: relative;
	color: ${props => props.theme.black};
	font-family: ${props => props.theme.font.sans}, sans-serif;
	min-height: 100vh;
	background-color: ${props => props.theme.light};
	.primary-link {
		color: ${props => props.theme.primary};
	}
	.primary-link:hover {
		color: ${props => props.theme.primaryHover};
	}

	.black-link {
		color: ${props => props.theme.black};
	}

	.small-font {
		font-size: 0.8rem;
	}
	.MuiCircularProgress-root {
		position: absolute;
		top: 50%;
		left: calc(50% - ${props => props.theme.circularProgressSize / 2}px);
	}
	.MuiDivider-root {
		background-color: rgba(0, 0, 0, 0.18);
	}
`;

export default AppWrapper;
