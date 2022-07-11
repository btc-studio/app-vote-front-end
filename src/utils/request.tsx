import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.vote.ai-studio-work.net/',
});

// request.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (err) => {
//     throw err;
//   },
// );

export default request;
