import axios from 'axios'

// Use Chrome extension for Access-Control-Allow-Origin to this site localhost:3000
// So no need to add external header on axios
// https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
const instance = axios.create({
  // headers: {
  //   'Access-Control-Allow-Origin': 'http://localhost:3000',
  //   'Access-Control-Allow-Headers': 'Origin',
  //   'Access-Control-Allow-Credentials': 'true',
  // },
  baseURL: 'https://www.carqueryapi.com/api/0.3'
});

export default instance