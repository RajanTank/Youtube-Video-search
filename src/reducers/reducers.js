import { combineReducers } from 'redux';

const videosReducer = (videos = [], action) => {
  if (action.type === 'VIDEOS') {
    return action.payload;
  }
  return videos;
}

const signUpReducers = (userData = [], action) => {
  switch (action.type) {
    case 'SIGNUP_DATA':
      return { ...action.payload };
    case 'ADD_TO_HISTORY':
      userData.history.push(action.payload);
      return { ...userData };
    case 'ADD_TO_WATCHLATER':
      userData.watchlater.push(action.payload);
      return { ...userData };
    default:
      return userData;
  }
}

const categoryVideoReducer = (videos = [], action) => {
  if (action.type === 'CATEGORY_VIDEOS') {
    return { ...action.payload };
  }
  return videos;
}

const selectedVideoReducer = (selectedVideo = null, action) => {
  if (action.type === 'SELECTED_VIDEO') {
    return action.payload
  }
  return selectedVideo;
}

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  userData: signUpReducers,
  categoryVideos: categoryVideoReducer
});