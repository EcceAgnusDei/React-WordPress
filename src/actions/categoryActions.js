import { FETCH_CATEGORIES } from './types.js';
import { categoriesLoading } from './statusActions.js';

export const fetchCategories = () => dispatch => {
	dispatch(categoriesLoading(true));
	fetch('/wp-json/wp/v2/categories')
		.then(resp => resp.json())
		.then(json => {
			dispatch({ type: FETCH_CATEGORIES, payload: json });
			dispatch(categoriesLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(categoriesLoading(true));
		});
};
