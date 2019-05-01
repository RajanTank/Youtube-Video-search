export const videosReducer = (videos = [], action) => {
  if (action.type === 'VIDEOS') {
    return action.payload;
  }
  return videos;
}
