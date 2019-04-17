import axios from 'axios';
import { baseUrl } from '../config/config';

export default axios.create({
  baseURL: baseUrl,
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_SECRET_KEY
  }
});   