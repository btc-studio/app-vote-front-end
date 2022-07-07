import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.app-vote.ai-studio-work.net/v1',
});

export default api;
