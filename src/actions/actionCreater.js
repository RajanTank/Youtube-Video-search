export const signUpData = (signUpData) => {
  return {
    type: 'SIGNUP_DATA',
    payload: signUpData
  };
};

export const selectedVideos = (selectedVideo) => {
  return {
    type: 'SELECTED_VIDEO',
    payload: selectedVideo
  };
}

export const fetchCategoryVideos = (videos) => {
  return {
    type: 'CATEGORY_VIDEOS',
    payload: videos
  };
}

export const fetchVideos = (videos) => {
  return {
    type: 'VIDEOS',
    payload: videos
  };
};

export const addToHistory = (id) => {
  return {
    type: 'ADD_TO_HISTORY',
    payload: id
  };
}

export const addToWatchLater = (id) => {
  return {
    type: 'ADD_TO_WATCHLATER',
    payload: id
  };
}

