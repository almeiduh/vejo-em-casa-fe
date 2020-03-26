import axios from 'axios';
import applyConverters from 'axios-case-converter';

const baseURL = 'https://fico-em-casa-be-jglxycc2ha-uc.a.run.app';

const axiosInstance = applyConverters(
  axios.create({
    baseURL: process.env.NODE_ENV !== 'development' ? baseURL : null,
    timeout: 5000,
  })
);

export default axiosInstance;
