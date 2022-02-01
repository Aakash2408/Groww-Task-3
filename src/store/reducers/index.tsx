import { combineReducers } from 'redux';

import randomPostsReducer from './randomPostsReducer';
import userPhotosReducer from './userPhotosReducer';
import userProfileReducer from './userProfileReducer';
import profileSugReducer from './profileSugReducer';

export default combineReducers({
    posts: randomPostsReducer,
    userProfile: userProfileReducer,
    userPhotos: userPhotosReducer,
    profileSugg:profileSugReducer
});