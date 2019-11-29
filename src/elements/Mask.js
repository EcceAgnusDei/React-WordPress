import React from 'react';
import styled from 'styled-components';

import shadow from 'assets/img/shadow_publi.png';

const Mask = styled.div`
	height: ${props => props.height};
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-image: url('${shadow}');
	background-repeat: repeat-x;
	background-size: 100% 100%;
`;

Mask.defaultProps = {
	height: '100px'
};

export default Mask;
