import React from 'react';

const months = [
	'Janvier',
	'Février',
	'Mars',
	'Avril',
	'Mai',
	'Juin',
	'Juillet',
	'Aout',
	'Septembre',
	'Octobre',
	'Novembre',
	'Décembre'
]

function DatePresentational({ date }) {
	const dateArray = date.split('-');
	const year = dateArray[0];
	const day = dateArray[1];
	const month = dateArray[2].slice(0, 2);
	console.log(year, month, day);


	return (
		<>{`${day} ${months[parseInt(month) - 1]} ${year}`}</>
	);
}

export default DatePresentational;