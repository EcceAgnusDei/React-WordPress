import React from 'react';
import styled from 'styled-components';

import Underliner from 'elements/Underliner';

const StyledHeader = styled.div`
	text-transform: uppercase;
	margin-bottom: 0;
`;

function WidgetHeader({ children, mb }) {
	return (
		<StyledHeader>
			{children}
			<Underliner mt={0} mb={mb} />
		</StyledHeader>
	);
}

WidgetHeader.defaultProps = {
	mb: 2
};

export default WidgetHeader;
