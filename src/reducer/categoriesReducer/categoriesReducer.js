import { FETCH_CATEGORIES } from '../../actions/types.js';

const initialState = {
	categories: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CATEGORIES:
			return {
				...state,
				categories: action.payload
			}
		default:
			return state;
	}
}