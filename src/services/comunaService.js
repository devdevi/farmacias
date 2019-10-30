import axios from 'axios';
import configService from './config';

const comunasService = axios.create({
  baseURL: configService.comunasUrl,
  headers: {
    'Access-Control-Allow-Origin': 'Content-Type',
    'Content-Type': 'multipart/form-data',
  },
});

export default comunasService;
