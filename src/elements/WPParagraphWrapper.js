import styled from 'styled-components';

const WPParagraphWrapper = styled.div`
	margin-bottom: ${props => props.theme.marginScale * props.mb}px;
	margin-top: ${props => props.theme.marginScale * props.mt}px;
	p {
		margin: 0;
		font-size: ${props => props.size}rem;
		text-align: justify;
		text-transform: none;
	}
	${props => props.mHeight && `max-height: ${props.mHeight}px;`}
	overflow: hidden;
`;

WPParagraphWrapper.defaultProps = {
	size: 1,
	mb: 1,
	mt: 1
};

export default WPParagraphWrapper;
