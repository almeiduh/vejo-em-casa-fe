import axios from 'axios';
import applyConverters from 'axios-case-converter';

const baseURL = 'https://private-49483-almeiduh.apiary-mock.com/';

const axiosInstance = applyConverters(
  axios.create({
    baseURL,
    timeout: 5000,
  })
);

export default axiosInstance;
