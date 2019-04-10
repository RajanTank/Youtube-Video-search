import React from 'react'
import youtube from '../api/youtube';


const WatchlaterVideo = async (ids) => {

   // let response  = await youtube.get('/video',{
   //    params:{
   //       id : ids,
   //    }
   // });   
   let response = {
      "kind": "youtube#videoListResponse",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/9bFuN_HZkq9aYJm6-c-xdWZxrr4\"",
      "pageInfo": {
       "totalResults": 1,
       "resultsPerPage": 1
      },
      "items": [
       {
        "kind": "youtube#video",
        "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/t6SMPKKBOmPQkbSweI3RF6ZN_B0\"",
        "id": "X09wDVW7JRI",
        "snippet": {
         "publishedAt": "2017-09-23T15:30:01.000Z",
         "channelId": "UCALeHfwxZslowXw-ug7tT7g",
         "title": "Johnny Lever Comedy Scene",
         "description": "Johnny Lever Comedy Scene",
         "thumbnails": {
          "default": {
           "url": "https://i.ytimg.com/vi/X09wDVW7JRI/default.jpg",
           "width": 120,
           "height": 90
          },
          "medium": {
           "url": "https://i.ytimg.com/vi/X09wDVW7JRI/mqdefault.jpg",
           "width": 320,
           "height": 180
          },
          "high": {
           "url": "https://i.ytimg.com/vi/X09wDVW7JRI/hqdefault.jpg",
           "width": 480,
           "height": 360
          },
          "standard": {
           "url": "https://i.ytimg.com/vi/X09wDVW7JRI/sddefault.jpg",
           "width": 640,
           "height": 480
          },
          "maxres": {
           "url": "https://i.ytimg.com/vi/X09wDVW7JRI/maxresdefault.jpg",
           "width": 1280,
           "height": 720
          }
         },
         "channelTitle": "Comedy Captain",
         "tags": [
          "johnny lever comedy scenes",
          "johnny lever",
          "johnny lever comedy",
          "comedy",
          "johnny lever best comedy",
          "comedy scene",
          "comedy movies",
          "johnny lever (film actor)",
          "johnny lever scenes",
          "johnny lever best scenes",
          "johny lever comedy",
          "scene",
          "comedy videos",
          "comedy movies hindi full",
          "comedy clips",
          "comedy funny video",
          "bollywood comedy scenes",
          "johny lever",
          "bollywood comedy movies",
          "comedy scenes",
          "bollywood",
          "comedy full movie",
          "comedy accident videos",
          "comedy drama",
          "lever",
          "full",
          "hd",
          "2017"
         ],
         "categoryId": "23",
         "liveBroadcastContent": "none",
         "localized": {
          "title": "Johnny Lever Comedy Scene",
          "description": "Johnny Lever Comedy Scene"
         },
         "defaultAudioLanguage": "hi"
        }
       }
      ]
     }
     

   return (response.items)

}; 

export default WatchlaterVideo ;