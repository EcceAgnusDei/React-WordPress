import styled from 'styled-components';

export const H1 = styled.h1`
	color: ${props => props.theme.primary};
	margin-bottom: ${props => (props.mb ? props.theme.marginScale * props.mb + 'px' : 'initial')};
	margin-top: ${props => (props.mt ? props.theme.marginScale * props.mt + 'px' : 'initial')};
	font-family: ${props => props.theme.font.serif}, serif;
	${props => props.center && 'text-align: center'}
	${props => props.shadow && 'text-shadow: 1px 1px 0px black;'}
`;

export const H2 = styled.h2`
	color: ${props => props.theme.primary};
	margin-bottom: ${props => (props.mb ? props.theme.marginScale * props.mb + 'px' : 'initial')};
	margin-top: ${props => (props.mt ? props.theme.marginScale * props.mt + 'px' : 'initial')};
	font-family: ${props => props.theme.font.serif}, serif;
	${props => props.center && 'text-align: center'}
	${props => props.shadow && 'text-shadow: 1px 1px 0px black;'}
`;

export const H3 = styled.h3`
	color: ${props => props.theme.primary};
	margin-bottom: ${props => (props.mb ? props.theme.marginScale * props.mb + 'px' : 'initial')};
	margin-top: ${props => (props.mt ? props.theme.marginScale * props.mt + 'px' : 'initial')};
	font-family: ${props => props.theme.font.serif}, serif;
	${props => props.center && 'text-align: center'}
	${props => props.shadow && 'text-shadow: 1px 1px 0px black;'}
`;

export const H4 = styled.h4`
	color: ${props => props.theme.primary};
	margin-bottom: ${props => props.theme.marginScale * props.mb + 'px'};
	font-family: ${props => props.theme.font.serif}, serif;
	${props => props.center && 'text-align: center'}
	${props => props.shadow && 'text-shadow: 1px 1px 0px black;'}
`;

export const H5 = styled.h5`
	color: ${props => props.theme.primary};
	margin-bottom: ${props => (props.mb ? props.theme.marginScale * props.mb + 'px' : 'initial')};
	margin-top: ${props => (props.mt ? props.theme.marginScale * props.mt + 'px' : 'initial')};
	font-family: ${props => props.theme.font.serif}, serif;
	${props => props.center && 'text-align: center'}
	${props => props.shadow && 'text-shadow: 1px 1px 0px black;'}
`;

export const H6 = styled.h6`
	color: ${props => props.theme.primary};
	margin-bottom: ${props => (props.mb ? props.theme.marginScale * props.mb + 'px' : 'initial')};
	margin-top: ${props => (props.mt ? props.theme.marginScale * props.mt + 'px' : 'initial')};
	font-family: ${props => props.theme.font.serif}, serif;
	${props => props.center && 'text-align: center'}
	${props => props.shadow && 'text-shadow: 1px 1px 0px black;'}
`;
