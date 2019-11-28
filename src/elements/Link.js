import styled from 'styled-components';

const Link = styled.div`
	a {
		color: ${props => props.theme[`${props.color}`]};
	}

	a:hover {
		color: ${props => props.theme[`${props.hover}`]};
	}
	display: ${props => props.d};
`;

Link.defaultProps = {
	d: 'block',
	color: 'primary',
	hover: 'primaryHover'
};

export default Link;
