import styled from 'styled-components';

const Link = styled.div`
	& a {
		color: ${props => props.theme.primary};
	}

	& a:hover {
		color: ${props => props.theme.primaryHover};
	}
`;

export default Link