import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.h2sistemas.net.br/h2Delivery/',
  // baseURL: 'http://echo.jsontest.com/key/value/one/two',
});

export default api;