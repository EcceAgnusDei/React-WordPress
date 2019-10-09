import { combineReducers } from 'redux';

import posts from './postsReducer/postReducer';
import status from './statusReducer/statusReducer.js';

export default combineReducers({posts, status});