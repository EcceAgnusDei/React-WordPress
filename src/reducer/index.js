import { combineReducers } from 'redux';

import posts from './postsReducer/postReducer';
import status from './statusReducer/statusReducer.js';
import categories from './categoriesReducer/categoriesReducer.js';

export default combineReducers({posts, status, categories});