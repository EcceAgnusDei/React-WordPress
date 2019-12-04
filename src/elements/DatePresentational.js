import React from 'react';

import { months } from 'utils/utils';

function DatePresentational({ date }) {
	const dateArray = date.split('-');
	const year = dateArray[0];
	const day = parseInt(dateArray[2].slice(0, 2)) + '';
	const month = dateArray[1];

	return <>{`${day} ${months[parseInt(month) - 1]} ${year}`}</>;
}

export default DatePresentational;
