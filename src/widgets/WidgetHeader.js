import React from 'react';
import styled from 'styled-components';

import Underliner from 'elements/Underliner';

const StyledHeader = styled.div`
	text-transform: uppercase;
	margin-bottom: 0;
`;

function WidgetHeader({ children }) {
	return (
		<StyledHeader>
			{children}
			<Underliner mt={0} mb={2} />
		</StyledHeader>
	);
}

export default WidgetHeader;
