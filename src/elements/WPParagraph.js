import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import Mask from 'elements/Mask';

const WPParagraphWrapper = styled.div`
	margin-bottom: ${props => props.theme.marginScale * props.mb}px;
	margin-top: ${props => props.theme.marginScale * props.mt}px;
	p {
		margin: 0;
		font-size: ${props => props.size}rem;
		text-align: justify;
		text-transform: none;
	}
	${props => props.maxHeight && `max-height: ${props.maxHeight}px;`}
	position: relative;
	overflow: hidden;
	padding: ${props => props.theme.marginScale * props.p}px;
`;

function WPParagraph({ maxHeight, content, ...otherProps }) {
	const [overflow, setOverflow] = useState(false);
	const contentRef = useRef(null);
	useEffect(() => {
		if (maxHeight && contentRef.current.getBoundingClientRect().height > maxHeight - 10) {
			setOverflow(true);
		} else {
			setOverflow(false);
		}
	});

	return (
		<WPParagraphWrapper maxHeight={maxHeight} {...otherProps}>
			<div dangerouslySetInnerHTML={{ __html: content }} ref={contentRef} />
			{overflow && <Mask />}
		</WPParagraphWrapper>
	);
}

WPParagraphWrapper.defaultProps = {
	size: 1,
	mb: 1,
	mt: 1,
	p: 0
};

export default WPParagraph;
