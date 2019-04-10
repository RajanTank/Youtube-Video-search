import axios from 'axios';


// const KEY ='AIzaSyBmctwBX84fmmweUPTCeiCJ87omLGGWB30';
// const KEY ='AIzaSyDCaoflqhPGGQgBAp82mVmiTQLzsJPAcmE';
const KEY = 'AIzaSyC4NmD6_LsTwuYW6eqmCgf46kng-Q4OkVs'

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part : 'snippet',
      key: KEY
   }

});