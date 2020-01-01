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

export const sortById = arr => {
	let array = [...arr];
	const result = [];
	while (array.length > 0) {
		const highestId = array.reduce((a, c) => (a.id > c.id ? a : c));
		result.push(highestId);
		array = array.filter(item => item.id !== highestId.id);
	}
	console.log(result[0]);
	console.log(result);
	return result;
};

export const intersperse = (arr, sep) => arr.reduce((a, v) => [...a, v, sep], []).slice(0, -1);
