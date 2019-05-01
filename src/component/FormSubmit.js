import React from 'react';
import youtube from '../api/youtube';

async function onFormSubmit(term, length) {
   let response = await youtube.get('/search', {
      params: {
         q: term,
         maxResults: length,
      }
   });
   console.log(response.data.items);
   return (response.data.items);
}

export default onFormSubmit;