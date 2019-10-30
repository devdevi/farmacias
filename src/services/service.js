import axios from 'axios';
import configService from './config';

const farmaciaService = axios.create({
  baseURL: configService.apiUrl,
  headers: {
    'Access-Control-Allow-Origin': 'Content-Type',
    'Content-Type': 'multipart/form-data',
  },
  // withCredentials: false,

});

export default farmaciaService;
