// export const interpose = (array, element) => {
// 	const result = [...array];
// 	let count = 1;
// 	while (count < result.length) {
// 		element.props.key = 777 + count;
// 		result.splice(count, 0, element);
// 		count += 2;
// 	}
// 	return result;
// };

export const months = [
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
];

export const parseDate = date => {
	const dateArray = date.split('-');
	const year = dateArray[0];
	const day = parseInt(dateArray[2].slice(0, 2)) + '';
	const month = dateArray[1];
	return {
		month,
		day,
		year
	};
};

export const getSize = theme => {
	const width = window.innerWidth;
	if (width < parseInt(theme.sm)) return 'xs';
	else if (width < parseInt(theme.md)) return 'sm';
	else if (width < parseInt(theme.lg)) return 'md';
	else if (width < parseInt(theme.xl)) return 'lg';
	else return 'xl';
};
