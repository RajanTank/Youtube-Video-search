import youtube from '../api/youtube';

const WatchlaterVideo = async (ids) => {

   let response = await youtube.get('/videos', {
      params: {
         id: ids,
      }
   });
   return (response.data.items);
};
export default WatchlaterVideo;