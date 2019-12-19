import React from 'react';

import { months, parseDate } from 'utils/utils';

function DatePresentational({ date }) {
	const parsedDate = parseDate(date);

	return <>{`${parsedDate.day} ${months[parseInt(parsedDate.month) - 1]} ${parsedDate.year}`}</>;
}

export default DatePresentational;
