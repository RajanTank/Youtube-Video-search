import { combineReducers } from 'redux';
import { signUpReducers } from './signUpReducers';
import { videosReducer } from './videosReducer';
import { selectedVideoReducer } from './selectedVideoReducer';

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  userData: signUpReducers
});