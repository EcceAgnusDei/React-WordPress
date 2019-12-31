import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';

import { CONSTANTS } from 'config';
import Mask from 'elements/Mask';
import WPParagraphWrapper from 'elements/WPParagraphWrapper';
import { H2 } from 'elements/H';

const ExcerptContainer = styled.div`
	position: relative;
`;

const StyledHeader = styled.div`
	text-transform: uppercase;
	margin-bottom: 0;
`;

const StyledH2 = styled(H2)`
	font-size: 1.1rem;
	text-transform: none;
	${props => props.centred && 'text-align: center;'}
`;

const StyledImg = styled.img`
	display: block;
	width: 100%;
`;

const WidgetPost = ({ post: { title, excerpt, slug }, media, centredTitle }) => {
	const img = media && (media.media_details.sizes.medium_large || media.media_details.sizes.medium);
	const wpParagraphRef = useRef(null);

	const [overflow, setOverflow] = useState(false);

	useEffect(() => {
		if (
			wpParagraphRef.current.children.item(0).getBoundingClientRect().height >
			CONSTANTS.LAST_POST_EXCERPT_MAX_HEIGHT
		) {
			setOverflow(true);
		} else {
			setOverflow(false);
		}
	});

	return (
		<ExcerptContainer>
			<ListItem button>
				<NavLink to={`/post/${slug}`} className="black-link">
					{media && <StyledImg src={img.source_url} alt={media.alt_text} />}
					<StyledH2 mt={1} centred={centredTitle}>
						{title.rendered}
					</StyledH2>
					<WPParagraphWrapper
						mHeight={CONSTANTS.LAST_POST_EXCERPT_MAX_HEIGHT}
						dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
						ref={wpParagraphRef}
						size="0.8"
					/>
					{overflow && <Mask />}
				</NavLink>
			</ListItem>
		</ExcerptContainer>
	);
};

export default WidgetPost;
